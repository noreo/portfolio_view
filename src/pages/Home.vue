<template>
  <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
    <div>
      <div class="vl" v-bind:class="{ show: isTop /*|| isLastSection, top: isLastSection*/}">
        <span class="cercle"></span>
      </div>
      <scroll-slider v-on:is-scroll="handleScroll">
        <!--  <StickyHeader class="white" v-bind:class="{ onscroll: isScrolled }" />-->
        <header class="cover section" data-anchor="welcome">
          <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
          <div class="intro">
            <h1 v-html="intro"></h1>
          </div>
        </header>
        <HomeProject v-for="(project, index) in projects" :key="index" :projectname="project.ref" :url="project.url+'/'" :client="project.client" :title="project.title" :details="project.details" :pathcover="urlProj+project.ref+'/'+project.images.cover.file" :typecover="project.images.cover.type" />
        <div id="site_contact" class="conclusion section" data-anchor="site_contact">
          <div class="container__txt--conclusion container">
            <span class="cercle"></span>
            <h2>Thanks for browsing by.</h2>
            <p>If you want to talk about interactive design, chocolat cookies, electro music or yoga, feel free to contact me.</p>
            <div class="links">
              <a href="mailto:">abercon@gmail.com</a>
              <a href="http://">Linkedin</a>
              <a href="http://">Behance</a>
            </div>
          </div>
        </div>
      </scroll-slider>
    </div>
  </transition>
</template>

<script>
import HomeProject from "../components/HomeProject";
import ScrollSlider from "../components/ScrollSlider";
import Data from "../assets/data_en.json";
var url_proj = "../static/assets/projects/";
import config from "../config";

var inteval;

//import { onScroll } from "../components/mixins/onscroll";

//import fullpage from "../global_js/javascript.fullPage.min";

import { Bus } from "../bus.js";

export default {
  name: "home",
  // mixins: [onScroll],
  props: {
    lang: {
      type: String,
      default: "en"
    },
    contact: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HomeProject,
   'scroll-slider': ScrollSlider
  },
  data() {
    return {
      intro: Data.intro,
      projects: Data.projects,
      urlProj: config.url_proj,
      isTop: true,
      isLastSection: false,
      lastSection: 1
    };
  },
  methods: {
    handleScroll(isTop) {
      this.isTop = isTop;
      this.$emit("is-scroll", !isTop);
    },
    initFullpage() {
      var comp = this;
      // if (screen && screen.width > 400) {
      //if not mobile
      fullpage.initialize("#fullpage", {
        afterLoad: function(anchorLink, index) {
          //  if (comp.$router.path !== "/") comp.$router.push({ path: "/" }); //if is contact then..
        },
        onLeave: function(index, nextIndex, direction) {
          let s = nextIndex != 1;
          comp.handleScroll(s);
          comp.isScrolled = s;
          comp.isLastSection = false; //remove vertical line when leaving contact section
        },
        afterLoad: function(anchorLink, index) {
          comp.isLastSection = comp.lastSection == index;
        }
      });
      /* } else {
        //if mobile: no auto scroll
        window.addEventListener("scroll", function() {
          let s = window.scrollY > 5;
          comp.handleScroll(s);
          comp.isScrolled = s;
        });
      }*/
    },
    movetocontact() {
      fullpage.moveTo(this.lastSection);
    },
    enter: function(el, done) {
      TweenLite.to(".home", 1, {
        alpha: 1,
        ease: Power2.easeInOut,
        onComplete: done
      });
    },
    leave: function(el, done) {
      console.log("byy home");
      TweenLite.to(".home", 1, {
        alpha: 0,
        onComplete: done
      });
    }
  },
  mounted: function() {
    var comp = this;

    this.lastSection = document.querySelectorAll("#fullpage .section").length;
 //   this.initFullpage();
    //  window.addEventListener("resize", this.initFullpage);

    //gotocontact from another page
    if (comp.$route.query.p == "contact") {
      this.movetocontact();
    }
    //gotocontact from home
    Bus.$on("movetocontact", function() {
      comp.movetocontact();
    });
    //gotohome from home
    Bus.$on("movetotop", function() {
      fullpage.moveTo(1); //move to top
    });

    if (this.contact) {
      this.movetocontact();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";
//@import "../global_js/javascript.fullPage.css";

//for fullpage


$vl-height: 8em;
$vl-height-sm: 3em;
$vl-height-lg: 11em;
$cercle-size: 1em;
$cercle-amin: 4s;

body {
  background: $deepspace;
  background: linear-gradient(to bottom, $deepspace, #070c2a, #3f1739);
  background-attachment: fixed;
  background-size: 100% 100%;
}

.home {
  & * {
    color: $white;
  }
  z-index: 0;
}

.cover {
  height: 100vh;
  text-align: center;
  white-space: nowrap;
  display: block;

  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; // Adjusts for spacing
  }
}

.mainlogo {
  margin-right: 1em; //adjust
  display: inline-block;
  vertical-align: middle;
  width: 65px;
}

.intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-bottom: $vl-height;
  h1 {
    font-size: 1em;
    line-height: 1.3;
    letter-spacing: normal;
  }
}

.conclusion {
  text-align: center;
  height: 100vh;
  text-align: center;
  display: block;
  padding-top: 5em;
  //overflow: hidden;
  padding-top: 0.5em; //adjust vertical align
  p {
    margin-bottom: 1em;
  }
  .links {
    // display: flex;
    position: relative; //parallax
    a {
      // margin: auto;
      display: block;
      padding: 0.5em;
      //margin:0.5em;
      width: 100%;
    }
  }
  &:before {
    //vertical align
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; // Adjusts for spacing
  }
  .container__txt--conclusion {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    max-width: 508px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: 100%;
      height: 9999px;
      width: 1px;
      background: $brightturquoise;
      left: 50%;
      margin-bottom: 1em;
      opacity: 0;
      transition-duration: 300ms;
      margin-left: -1px;
    }
    .cercle {
      position: absolute;
      top: -2rem;
      left: 50%;
      margin-left: -$cercle-size / 2;
      transform: translateY(-50vh);
      opacity: 0;
    }
  }
  &.active {
    .container__txt--conclusion:before {
      transition-delay: 700ms;
      transition-property: opacity;
      opacity: 1;
    }
    .container__txt--conclusion .cercle {
      //animate
      // transition-delay: 700ms;
      //transition-property: opacity;
      // opacity: 1;

      transition: transform;
      transition-timing-function: cubic-bezier(0.33, 0, 0.67, 1);
      // transform: translateY(0);
      animation: movecercle_end 2s forwards; /* IE 10+, Fx 29+ */
    }
  }
}
.vl {
  // transition-property: bottom;
  bottom: 0;
  border-left: 1px solid $brightturquoise;
  height: $vl-height;
  position: fixed;
  left: 50%;
  margin-left: -1px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  transition: opacity $transition;
  .cercle {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: -$cercle-size / 2;
  }
  &.show {
    //transition-delay: 700ms !important;

    opacity: 1;
    .cercle {
      //start animatation
      transition: transform;
      transition-timing-function: cubic-bezier(0.33, 0, 0.67, 1);
      animation: movecercle $cercle-amin infinite; /* IE 10+, Fx 29+ */
      // transform: translateY($vl-height);
    }
  }
  &.top {
    bottom: auto;
    top: 0;
  }
}
.cercle {
  display: block;
  height: $cercle-size;
  width: $cercle-size;
  border-radius: $cercle-size;
  background-color: $brightturquoise;
}

$one-sec: 100 / $cercle-amin; //1 second in pourcentage

@keyframes movecercle {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  21% {
    //3sec
    opacity: 1;
    transform: translateY(0);
  }
  57% {
    //1sec
    opacity: 1;
    transform: translateY($vl-height-lg);
  }
  58% {
    opacity: 0;
    transform: translateY($vl-height-lg);
  }
  87% {
    opacity: 0;
    //transform: translateY($vl-height-lg);
    transform: translateY(0);

  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes movecercle_end {
  0% {
    opacity: 0;
    transform: translateY(-10rem);
  }
  50% {
    opacity: 0;
    transform: translateY(-10rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

//paralax

.section {
  h2,
  p,
  .goto-container .inner-goto-container,
  .container__txt--conclusion .links {
    //bottom: -2rem; //move down element from 20px in height 768px
  }
  &.active {
    h2,
    p,
    .goto-container .inner-goto-container,
    .container__txt--conclusion .links {
      transition-delay: 400ms;
      transition-duration: 600ms;
      transition-property: bottom;
      transition-timing-function: ease;
      bottom: 0 !important; //move back element
    }
  }
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

//landscapde mobile
@media (#{$bp-larger-than-phablet}) and (orientation: landscape) {
  .intro {
    padding-bottom: $vl-height-sm;
  }
  .vl {
    height: $vl-height-sm;
  }
}

// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
  .intro {
    padding-bottom: $vl-height-lg;
  }
  .vl {
    height: $vl-height-lg;
  }
}
</style>

<template>
<div>
        <div class="vl" v-bind:class="{ hide: isScrolled }">
          <span class="cercle" v-bind:class="{ animate: !isScrolled }"></span>
        </div>
  <div class="home" id="fullpage">
  <!--  <StickyHeader class="white" v-bind:class="{ onscroll: isScrolled }" />-->
    <header class="cover section">
      <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
      <div class="intro">
        <h1 v-html="intro"></h1>
      </div>
    </header>
      <HomeProject v-for="project in projects" 
      :key="project.id" 
      :projectname="project.ref" 
      :url="project.url"
      :client="project.client" 
      :title="project.title" 
      :details="project.details" 
      :pathcover="urlProj+project.ref+'/'+project.images.cover.file" 
      :typecover="project.images.cover.type" 
      />
      <div class="conclusion container section">
        <div class="container__txt--conclusion">
        <h2>Thanks for browsing by.</h2>
        <p>If you want to talk about interactive design, chocolat cookies, electro music or yoga, feel free to contact me.</p>
        <div class="links"><a href="mailto:">abercon@gmail.com</a><a href="http://">Linkedin</a><a href="http://">Behance</a></div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import HomeProject from "../components/HomeProject";
import Data from "../assets/data_en.json";
var url_proj = "../static/assets/projects/";
import config from "../config";

var inteval;

//import { onScroll } from "../components/mixins/onscroll";

import fullpage from "../global_js/javascript.fullPage.min";

export default {
  name: "home",
  // mixins: [onScroll],
  props: {
    lang: {
      type: String,
      default: "en"
    }
  },

  components: {
    HomeProject
  },
  data() {
    return {
      intro: Data.intro,
      projects: Data.projects,
      urlProj: config.url_proj,
      isScrolled: false
    };
  },
  methods: {
    handleScroll(isTop) {
      this.$emit("update", isTop);
    },
    initFullpage() {
      var comp = this;
      // if (screen && screen.width > 400) {
      //if not mobile
      fullpage.initialize("#fullpage", {
        afterLoad: function(anchorLink, index) {},
        onLeave: function(index, nextIndex, direction) {
          let s = nextIndex != 1;
          comp.handleScroll(s);
          comp.isScrolled = s;
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
    }
  },
  mounted: function() {
    this.initFullpage();
    //  window.addEventListener("resize", this.initFullpage);
  },
  beforeDestroy() {
    // window.removeEventListener("scroll");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";
@import "../global_js/javascript.fullPage.css";

$vl-height: 8em;
$vl-height-sm: 3em;
$vl-height-lg:11em;
$cercle-size: 1em;
$cercle-amin: 7s;

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
  p{
    margin-bottom: 1em;
  }
  .links{
   // display: flex;
    a{
     // margin: auto;
      display: block;
      padding:0.5em;
      //margin:0.5em;
      width: 100%;
    }
  }
  &:before {
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
  }
}
.vl {
  border-left: 1px solid $brightturquoise;
  height: $vl-height;
  position: fixed;
  left: 50%;
  margin-left: -1px;
  bottom: 0;
  white-space: nowrap;
  z-index: 1;

  .cercle {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: - $cercle-size / 2;
  }
  &.hide {
    opacity: 0;
  }
}
.cercle {
  display: block;
  height: $cercle-size;
  width: $cercle-size;
  border-radius: $cercle-size;
  background-color: $brightturquoise;
  &.animate {
    transition: transform;
    transition-timing-function: cubic-bezier(0.33, 0, 0.67, 1);
    animation: movecercle $cercle-amin infinite; /* IE 10+, Fx 29+ */
    // transform: translateY($vl-height);
  }
}

$one-sec: 100 / $cercle-amin; //1 second in pourcentage

@keyframes movecercle {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  43% {
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
    transform: translateY($vl-height-lg);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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

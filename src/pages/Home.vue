<template>
<div>
        <div class="vl" v-bind:class="{ hide: isOnScroll }">
          <span class="cercle" v-bind:class="{ animate: !isOnScroll }"></span>
        </div>
  <div class="home" id="fullpage">
  <!--  <StickyHeader class="white" v-bind:class="{ onscroll: isOnScroll }" />-->
    <header class="cover section">
      <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
      <div class="intro">
        <h1 v-html="intro"></h1>
      </div>
    </header>
    <div class="container section">
      <HomeProject v-for="project in projects" :key="project.id" :projectname="project.ref" :client="project.client" :title="project.title" :details="project.details" :pathcover="urlProj + '/'+project.ref+'/'+project.images.cover.file" />
    </div>
  </div>
</div>
</template>

<script>
import StickyHeader from "../components/StickyHeader";
import HomeProject from "../components/HomeProject";
import Data from "../assets/data_en.json";
var url_proj = "../static/assets/projects/";
import config from "../config";

var inteval;

import { onScroll } from "../components/mixins/onscroll";

import fullpage from "../global_js/javascript.fullPage.min";
//console.log(fullpage);

//fullpage.initialize('#fullpage');

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
    StickyHeader,
    HomeProject
  },
  data() {
    return {
      intro: Data.intro,
      projects: Data.projects,
      urlProj: config.url_proj
    };
  },
  methods: {
    handleScroll() {
      this.$emit('update', true)
    }
  },
  mounted: function() {
     var comp = this;
    
    fullpage.initialize("#fullpage", 
    {
     // 'scrollBar': true, //allow window scroll event
      'onLeave': function(){
        console.log('coucu');
        comp.handleScroll();
        
      },
    });
    //$('#fullpage').fullpage();
    /* var body = document.body,
      html = document.documentElement;

    var docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    bottomScroll = docHeight - window.innerHeight; */
    //console.log(config.url_proj);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_js/javascript.fullPage.css";
$vl-height: 8em;
$cercle-size: 1em;
$cercle-amin: 7s;

body {
  background: $deepspace; //background: -webkit-linear-gradient(to bottom, #414345, #232526);
  // background: linear-gradient(to bottom, $deepspace, #070C2A);
  //background: linear-gradient(to bottom, $deepspace,#281b47, #070C2A, #281b47);
  background: linear-gradient(to bottom, $deepspace, #070c2a, #3f1739);
  background-attachment: fixed;
  background-size: 100% 100%;
}

.home {
  background: repeating-linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.3) 4px
  );
  & * {
    color: $white;
  }
  background-attachment: fixed;
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
.vl {
  border-left: 1px solid $brightturquoise;
  height: $vl-height;
  position: fixed;
  left: 50%;
  margin-left: -1px;
  bottom: 0;
  white-space: nowrap;

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
    transform: translateY($vl-height);
  }
  58% {
    opacity: 0;
    transform: translateY($vl-height);
  }
  87% {
    opacity: 0;
    transform: translateY($vl-height);
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
</style>

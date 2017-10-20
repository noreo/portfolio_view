<template>
  <div class="home">
    <StickyHeader class="white" v-bind:class="{ onscroll: isOnScroll }" />
    <header class="cover">
      <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
      <div class="intro">
        <h1 v-html="intro"></h1>
        <div class="vl" v-bind:class="{ hide: isOnScroll }">
          <span class="cercle" v-bind:class="{ animate: isCercleVisible }"></span>
        </div>
      </div>
    </header>
    <div class="container">
      <HomeProject v-for="project in projects" :key="project.id" :projectname="project.ref" :client="project.client" :title="project.title" :details="project.details" :pathcover="urlProj + '/'+project.ref+'/'+project.images.cover.file" />
    </div>
  </div>
</template>

<script>

import StickyHeader from '../components/StickyHeader';
import HomeProject from '../components/HomeProject';
import Data from '../assets/data_en.json';
var url_proj = '../static/assets/projects/'
import config from '../config';

var inteval;
export default {
  name: 'home',
  props: {
    lang: {
      type: String,
      default: 'en'
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
      isCercleVisible: false,
      isOnScroll: false,
      urlProj: config.url_proj
      
    }
  },
  methods: {
    handleTime() {
      this.isCercleVisible = !this.isCercleVisible;
    },
    handleScroll() {
      //window.innerHeight
      var isTop = (window.scrollY > 5);

      this.isOnScroll = isTop;

      if (!isTop) {
        clearInterval(inteval);
        this.isCercleVisible = false; //reset
      }

    }
  },
  mounted: function() {
    // Code that will run only after the entire view has been rendered
    inteval = window.setInterval(this.handleTime, 3000);
    console.log(config.url_proj);
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import '../global_scss/colors.scss';
$vl-height:8em;
$cercle-size:1em;
body {

  background: $deepspace; //background: -webkit-linear-gradient(to bottom, #414345, #232526);
  // background: linear-gradient(to bottom, $deepspace, #070C2A);
  background: linear-gradient(to bottom, $deepspace,#281b47, #070C2A, #281b47);
  background-attachment: fixed;
  background-size: 400% 400%;
/*
-webkit-animation: AnimationName 10s ease infinite;
-moz-animation: AnimationName 10s ease infinite;
animation: AnimationName 10s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
}
@keyframes AnimationName {
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
}*/
}

.home {
  background: repeating-linear-gradient( rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 0) 2px,
  rgba(0, 0, 0, 0.3) 2px,
  rgba(0, 0, 0, 0.3) 4px);
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
    content: '';
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

  .vl {
    border-left: 1px solid $brightturquoise;
    height: $vl-height;
    position: absolute;
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
    transition: transform 1s;
    transition-timing-function: cubic-bezier(0.33, 0.00, 0.67, 1.00);
    &.animate {
      transform: translateY($vl-height);
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
</style>

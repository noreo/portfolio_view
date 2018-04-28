<template>
  <transition    
      name="sliding"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
  >
        <div class="single__project">
          <header class="home-project container">
            <h3 :class="textClass">{{objProject.client}}</h3>
                  <h1 class="h2">{{ objProject.title }}</h1>
              </header>
          <div class="project__background">
            <div class="container">
            dsahdjshajdhsa
            </div>
          </div>
        </div>
  </transition>
</template>

<script>
import HomeProject from "../components/HomeProject";
import Data from "../assets/data_en.json";
import config from "../config";

import { Bus } from "../bus.js";

export default {
  name: "project",
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
    HomeProject
  },
  data() {
    return {
      intro: Data.intro,
      projects: Data.projects,
      urlProj: config.url_proj,
      objProject: {},
      index: 0,
      projectref: "",
      textClass: "color-"
    };
  },
  methods: {
    enter: function(el, done) {
      TweenLite.to(".project__background", 1.5, {
        x: 0,
        ease: Power2.easeInOut,
        onComplete: done
      });
    },
    leave: function(el, done) {
      console.log("byy");
      TweenLite.to(".project__background", 1, {
        x: "110%",
        ease: Power2.easeInOut,
        onComplete: done
      });
    }
  },
  mounted: function() {
    var url = this.$route.params.name;
    var i = 0;
    this.projects.forEach(project => {
      if (project.url == url) {
        this.objProject = project;
        this.index = i;
      }
      i++;
    });
    this.textClass += this.objProject.ref;
    console.log(this.index);
  },
  beforeDestroy: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";

.project__background {
  background-color: $white;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  transform: translateX(100vw);

  width: 100%;
  height: 100%;
  z-index: 2; //hover home vertical line
}
.single__project {
  .home-project {
    z-index: 3; //hover project__background
    .h2 {
      color: $black;
    }
  }
}

//landscapde mobile
@media (#{$bp-larger-than-phablet}) and (orientation: landscape) {
}

// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
}

/* .pslide-enter-active {
  animation-direction: 0.6s;
  .project__background {
 animation-delay: 0.1s;
    animation: pslide-in 0.5s;
  }
}
.pslide-leave-active {
 // animation-direction: 0.5s;
    animation: pslide-out 0.5s;
  .project__background {
  }
} */
</style>

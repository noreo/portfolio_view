<template>

    <div v-bind:class="{ active: isActive }" class="section home-project container">
        <h3 v-bind:class="textClass">{{ client }}</h3>
        <imagetype  :title="title"  :pathcover="pathcover" :type="typecover" extraclass="home" v-bind:class="{ active: isActive }"/>
        <h2 >{{ title }}</h2>
        <p  class="project__details">{{ details }}</p>
        <div class="goto-container">
            <router-link 
            @mouseenter.native="mouseOver" 
            @mouseleave.native="mouseOver" 
            class="button" v-bind:class="lineClass" :to="'/'+url">{{ cta_msg }}</router-link>
        </div>
    </div>
</template>

<script>
import ImageType from "./ImageType";

export default {
  name: "project",
  props: [
    "url",
    "projectname",
    "client",
    "title",
    "details",
    "pathcover",
    "typecover"
  ],
  components: {
    imagetype: ImageType
  },
  data() {
    return {
      cta_msg: "View project",
      lineClass: "after-" + this.projectname + " hover-" + this.projectname,
      textClass: "color-" + this.projectname, 
      isActive:false
    };
  },
  mounted: function() {
    //console.log(this.pathcover);
  },
  methods: {
    mouseOver: function() {
      this.isActive = !this.isActive;
      //console.log("coucou");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";
#app {
  .home-project {
    min-height: 100vh; //fullpage is doing it?
    overflow: visible;
    padding-top: 5em;
    h3 {
      margin-bottom: 1rem;
    }
    .goto-container {
      height: 100%;
      display: block;
      overflow: visible;
      white-space: nowrap;
      .button {
        margin: 0;
        position: relative;
        display: inline-block;
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 9999px;
          height: 1px;
          background: $white;
          left: 100%;
          margin-left: 1em;
        }
      }
    }
    &.active{
      h3, h2, p{
      transition-duration: 500ms;
        opacity: 0;
      }
    }
  }
}
//is small mobile
$bp-small-mobile: "max-width: 321px" !default;

@media (#{$bp-small-mobile }) {
  #app {
    .home-project {
      .project__details {
        display: none;
      }
      h2 {
        font-size: 1.5em;
      }
      .container__img {
        width: 100% !important;
      }
    }
  }
}
// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
  #app {
    .home-project {
      h3,
      h2,
      p {
        max-width: 50%;
        z-index: 2;
      }
      .goto-container {
        .button {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4rem;
        }
      }
    }
  }
}
</style>

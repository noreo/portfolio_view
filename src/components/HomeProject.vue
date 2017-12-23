<template>

    <div class="section home-project container">
        <h3 v-bind:class="textClass">{{ client }}</h3>
        <imagetype  :title="title"  :pathcover="pathcover" :type="typecover"/>
        <h2>{{ title }}</h2>
        <p  class="project__details">{{ details }}</p>
        <div class="goto-container">
            <router-link class="button" v-bind:class="lineClass" :to="'/'+url">{{ cta_msg }}</router-link>
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
      textClass: "color-" + this.projectname
    };
  },
  mounted: function() {
    //console.log(this.pathcover);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../global_scss/colors.scss";
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
</style>

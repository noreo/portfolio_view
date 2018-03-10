<template>
<div>
<h1>hello</h1>
</div>
</template>

<script>
import HomeProject from "../components/HomeProject";
import Data from "../assets/data_en.json";
var url_proj = "../static/assets/projects/";
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
      objProject: {}
    };
  },
  methods: {
  
  },
  mounted: function() {
  var url = this.$route.params.name;
  this.projects.forEach(project => {
    if(project.url == url){
      this.objProject = project;
    }
  });
  console.log(this.objProject.ref);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";
@import "../global_js/javascript.fullPage.css";
body{
 background-color: $white;
}

//landscapde mobile
@media (#{$bp-larger-than-phablet}) and (orientation: landscape) {
}

// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
}
</style>

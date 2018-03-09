<template>
<div>

    <header class="cover section" data-anchor="welcome">
   
    </header>
     
</div>
</template>

<script>
import Data from "../assets/data_en.json";
var url_proj = "../static/assets/projects/";
import config from "../config";


import { Bus } from "../bus.js";

export default {
  name: "project",
  components: {
    HomeProject
  },
  data() {
    return {
      intro: Data.intro,
      projects: Data.projects,
      urlProj: config.url_proj,
      isScrolled: false,
      isLastSection: false,
      lastSection: 1
    };
  },
  methods: {
    
  },
  mounted: function() {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";


body {
  background: $white;
}

//landscapde mobile
@media (#{$bp-larger-than-phablet}) and (orientation: landscape) {

}

// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
}
</style>

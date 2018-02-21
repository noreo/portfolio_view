<template>
     <div class="container__img ipad" v-bind:class="extraclass" v-if="type === 'ipad'">
       <img class="cover" v-bind:src="pathcover" v-bind:title="title" v-bind:alt="title">
       <svgicon class="case" title="ipag back" name="templates/ipad" color=""></svgicon>
    </div>
    <div class="container__img  desktop" v-bind:class="extraclass" v-else-if="type === 'desktop'">
      <img class="cover" v-bind:src="pathcover" v-bind:title="title" v-bind:alt="title">
       <svgicon class="case" title="ipag back" name="templates/desktop" color=""></svgicon>
    </div>
    <div class="container__img  image" v-bind:class="extraclass" v-else>
        <img class="cover" v-bind:src="pathcover" v-bind:title="title" v-bind:alt="title">
    </div>
</template>

<script>
export default {
  name: "imagetype",
  props: ["title", "pathcover", "type", "extraclass"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";
.container__img {
  width: 21rem; //mobile
  height: auto;
  float: left;
  margin-bottom: 1em; //mobile
  position: relative;
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; // max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
  }
  .case {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    opacity: 0.6;
  }
}
.ipad {
  .cover {
    padding: 3.5% 7.22% 0 7%;
  }
}
.desktop {
  .cover {
    padding: 4.5% 4.55% 0 4.55%;
  }
}
.image {
  width: 440px; //mobile
  .cover {
    position: static;
  }
}

// Larger than tablet (desktop)
@media (#{$bp-larger-than-tablet}) {
  .container__img {
    width: 100%;
    &.image {
      max-width: 800px;
    }
    &.ipad,
    &.desktop {
      max-width: 726px;
    }
    //if displayed on home
    &.home {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.4;
      transition-duration: 500ms;
      z-index: -1;
      &.active{
        opacity: 1;
      }
    }
  }
}
</style>

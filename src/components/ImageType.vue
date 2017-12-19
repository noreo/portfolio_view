<template>
     <div class="container__img ipad" v-if="type === 'ipad'">
       <img class="cover" v-bind:src="pathcover" v-bind:title="title" v-bind:alt="title">
       <svgicon class="case" title="ipag back" name="templates/ipad" color=""></svgicon>
        </div>
        <div class="container__img  image" v-else-if="type === 'none'">
            <img class="cover" v-bind:src="pathcover" v-bind:title="title" v-bind:alt="title">
        </div>
</template>

<script>
export default {
  name: "imagetype",
  props: ["title", "pathcover", "type"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container__img {
  //max-width: 100%;
  width: 440px; //mobile
  height: auto;
  float: left;
  margin-bottom: 0.5em; //mobile
}
.ipad {
  position: relative;
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; // max-width: 100%;
    width: 100%;
    padding: 3.5% 7.22% 0 7%;
    height: auto;
    display: block;
  }
  .case {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto; //  width:368px;
    //height:262px;
  }
}
.image{
  .cover {
    width: 100%;
    height: auto;
  }
}
</style>

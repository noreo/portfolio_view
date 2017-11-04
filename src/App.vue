<template>
  <div id="app">

        <StickyHeader class="white" v-bind:class="{ onscroll: isScrolled }" />
    <transition name="fade" mode="out-in">
      <router-view @update="updateOnScroll"></router-view>
    </transition>
  </div>
</template>

<script>
import "./assets/icons";
import StickyHeader from "./components/StickyHeader";
import { onScroll } from './components/mixins/onscroll'


export default {
  name: "app",
    mixins: [onScroll], //return isScrolled
    methods:{
      updateOnScroll(scrolled){
        this.isScrolled = scrolled;
      }
    }
,
  components: {
    StickyHeader
  }
};
</script>

<style lang="scss">
@import "global_scss/global.scss";
@import url("https://fonts.googleapis.com/css?family=Cantata+One");
html,
body {
  font-size: 16px;
}

* {
  transition: all $transition;
}

#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  margin: 0;
  overflow: hidden; //prevent "goto" line to out of the screen
  h2 {
    font-size: 2.5em;
    line-height: 1.1;
    font-weight: 100;
    clear: both;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: normal;
    font-family: "Cantata One", serif;
  }
  .button {
    font-size: 1em;
    font-weight: normal;
    letter-spacing: normal;
    padding: 0 2.5em;
    height: 42px;
    line-height: 42px;
    border-color: $white;
    color: $white;
    &:hover {
      border-color: $brightturquoise;
      background-color: $black;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

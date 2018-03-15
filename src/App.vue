<template>
  <div id="app">
    <StickyHeader v-bind:class="{ onscroll: isScrolled }" />
    <transition name="slide" mode="in-out">
      <router-view @update="updateOnScroll"></router-view>
    </transition>
  </div>
</template>

<script>
import "./assets/icons";
import StickyHeader from "./components/StickyHeader";
import { onScroll } from "./components/mixins/onscroll";

export default {
  name: "app",
  mixins: [onScroll], //return isScrolled
  methods: {
    updateOnScroll(scrolled) {
      this.isScrolled = scrolled;
    }
  },
  components: {
    StickyHeader
  },
  mounted: function() {
    var url = this.$route.params.name;
    console.log(url);
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
  /* background: repeating-linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.3) 4px
  );*/
  background-image: url("../static/assets/line.svg");
  background-attachment: fixed;
  background-size: 1px 4px;
  color: $black;
  margin: 0;
  overflow: hidden; //prevent "goto" line to out of the screen
  h2, .h2 {
    font-size: 2em; //2.5em on desktop
    line-height: 1.1;
    font-weight: 100;
    clear: both;
    letter-spacing: 0.17px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: normal;
    font-family: "Cantata One", serif;
    margin-bottom: 0.5rem; //mobile
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
    background-color: $deepspace;
    &:hover {
      border-color: $brightturquoise;
      box-shadow: 0 0 0 0.02em $brightturquoise;
    }
  }
}



.slide-enter-active {
  animation: slideInRight 0.8s;
  animation-timing-function:cubic-bezier(0.33, 0, 0.33, 1.04);
 // -webkit-animation-name: slideInRight;
  //animation-name: slideInRight;
}
.slide-leave-active {
  animation: slideInRight 0.8s reverse;
}


@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
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

<template>
  <div id="app">

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import './assets/icons';
export default {
  name: 'app'
}

</script>

<style lang="scss">
@import 'global_scss/global.scss';
@import url('https://fonts.googleapis.com/css?family=Cantata+One');
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
    font-family: 'Cantata One', serif;
  }
  .button {
    font-size: 1em;
    font-weight: normal;
    letter-spacing: normal;
    padding: 0 2.5em;
    height: 42px;
    line-height: 42px;
    border-color: $white;
    &:hover{
      color:$white;
      border-color: $brightturquoise;
      background-color: $black;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>

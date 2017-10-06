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
html,
body {
  font-size: 16px;
}
*{
  transition: all $transition;  
}

#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin:0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
{
  opacity: 0
}
</style>

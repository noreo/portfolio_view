<template>
  <div id="app">
    <StickyHeader class="white" />
    <br>    
    <br>    
    <br>    
    <br>    
    <router-link to="/">Go to Hellooo</router-link>
    <router-link to="/bye">Go to Bye</router-link>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import StickyHeader from './layouts/StickyHeader';
import './assets/icons';
export default {
   components: {
    StickyHeader
  },
  name: 'app'
}

</script>

<style lang="scss">
@import 'global_scss/global.scss';
html,body{
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>

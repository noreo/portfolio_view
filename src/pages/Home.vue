<template>
  <div class="home">
    <StickyHeader class="white" />
    <header class="cover">
      <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
      <div class="intro">
        <h1 v-html="intro"></h1>
        <div class="vl">
          <span class="cercle" v-bind:class="{ animate: isCercleVisible }"></span>
        </div>
      </div>
    </header>
    <router-link to="/">Go to Hellooo</router-link>
    <router-link to="/bye">Go to Bye</router-link>
  </div>
</template>

<script>
import StickyHeader from '../components/StickyHeader';

export default {
  name: 'home',
  components: {
    StickyHeader
  },
  data() {
    return {
      intro: 'My name is Aurélien, <br>I make digital experiences for humans.', 
      isCercleVisible: false
    }
  }, 
   methods: {
    handleTime() {
      this.isCercleVisible = !this.isCercleVisible;
    }
  },
  mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
    window.setInterval(this.handleTime, 3000)
  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import '../global_scss/colors.scss';
$vl-height:8em;
$cercle-size:1em;
body{

  background: $deepspace;
  //background: -webkit-linear-gradient(to bottom, #414345, #232526);
  background: linear-gradient(to bottom, $deepspace, #070C2A);
}
.home {
  background: repeating-linear-gradient(
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 0) 2px,
  rgba(0, 0, 0, 0.2) 2px,
  rgba(0, 0, 0, 0.2) 4px
);
 & *{
   color:$white;
 }
}

.cover {
  height: 100vh;
  text-align: center;
  white-space: nowrap;
  display: block;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; // Adjusts for spacing
  }
}

.mainlogo {
  margin-right: 1em; //adjust
  display: inline-block;
  vertical-align: middle;
  width: 65px;
}

.intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-bottom: $vl-height;
  h1 {
    font-size: 1em;
    line-height: 1.3;
    letter-spacing: normal;
  }

  .vl {
    border-left: 1px solid $brightturquoise;
    height: $vl-height;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    bottom: 0;
    white-space: nowrap;

    .cercle {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: - $cercle-size / 2;
    }
  }
  .cercle {
    display: block;
    opacity: 1;
    height: $cercle-size;
    width: $cercle-size;
    border-radius: $cercle-size;
    background-color: $brightturquoise;
    transition: transform 1s;
      transition-timing-function: cubic-bezier(0.33, 0.00, 0.67, 1.00);
    &.animate{
      opacity: 1;
      transform: translateY($vl-height);
    }
  }
}
</style>

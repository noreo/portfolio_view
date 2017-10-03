<template>
  <div class="home">
    <StickyHeader class="white" />
    <header class="cover">
      <svgicon class="mainlogo" name="logo" width="65" height="65" color=""></svgicon>
      <h1 class="intro" v-html="intro"></h1>
    </header>
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
      intro: 'My name is Aurélien, <br>I make digital experiences for humans.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../global_scss/colors.scss';
.cover{
  height: 100vh;
   text-align: center;

  /* May want to do this if there is risk the container may be narrower than the element inside */
  white-space: nowrap;
  &:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em; /* Adjusts for spacing */
}
}
.mainlogo{
  margin-right: 1em; //adjust

  display: inline-block;
  vertical-align: middle;
  width: 65px;
}
.intro{
  font-size: 1em;
  align-self: flex-end;
}
</style>

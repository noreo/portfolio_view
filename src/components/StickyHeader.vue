<template>
  <nav class="navbar" v-bind:class="{ white: isHeaderWhite }">
    <div class="container">
      <router-link class="logo-min" to="/" @click.native="gototop">
        <svgicon name="logo-min" width="30" height="30" color=""></svgicon>
      </router-link>
      <ul class="navbt">
        <li>
          <button class=" button-square noborder">
            <svgicon name="sound" width="24" height="24" color=""></svgicon>
          </button>
        </li>
        <li>
          <router-link class="button-square visible-top" to="/fr">
            <span>Fr</span>
          </router-link>
        </li>
        <li>
          <router-link class="button-square" to="/?p=contact" @click.native="gotocontact">
            <svgicon name="contact" width="24" height="24" color=""></svgicon>
          </router-link>
        <!--   <a class="button-square" v-on:click.stop.prevent="gotocontact" href="#">
            <svgicon name="contact" width="24" height="24" color=""></svgicon>
          </a>-->
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
import { Bus } from "../bus.js";
export default {
  name: "header",
  data() {
    return {
      isHeaderWhite: true
    };
  },
  mounted: function() {
    this.isHeaderWhite = (this.$route.name == "Home");
  },
  methods: {
    gototop() {
      // Send the event on the bus
      Bus.$emit("movetotop");
    },
    gotocontact() {
      // Send the event on the bus
      Bus.$emit("movetocontact");
    }
  },
  watch: {
    $route(to, from) {
      this.isHeaderWhite = (to.name == "Home");

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../global_scss/colors.scss";
@import "../global_scss/base/_variables.scss";

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  padding-top: 1em;

  .logo-min {
    float: left;
    margin-top: 0.5em;
    padding-top: 4px;
    margin-right: -1px;
    opacity: 0;
    visibility: hidden;
    path {
      fill: $black;
    }
  }

  ul.navbt {
    list-style-type: none;
    padding: 0;
    float: right;
    li {
      display: inline-block;
      margin: 0 0 0 1rem;
    }
  }

  .button-square {
    text-transform: uppercase;
    text-align: center;
    color: $black;
    font-size: 1em;
    margin: 0;
    padding: 0;
    border: 1px solid $black;
    height: 3.5em;
    width: 3.5em;
    line-height: 1.5em;
    position: relative;
    display: inline-block;
  transition: opacity $transition;
    
    * {
      height: 1.5em;
      width: 1.5em;
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -0.75em;
      margin-left: -0.75em;
      left: 50%;
      path {
        fill: $black;
      }
    }

    &:hover {
      border-color: $brightturquoise;
      background-color: $deepspace;
    }
    &.noborder {
      border-color: transparent;
      border-radius: 1.5em;
      display: none;
    }
  } //header is all white
  &.white {
    .logo-min,
    .button-square {
      color: $white;
      border-color: $white;
      &:hover {
        border-color: $brightturquoise;
      }
    }
    path {
      fill: $white;
    }
    .logo-min:hover path {
      fill: $brightturquoise;
    }
  }
}

.navbar.onscroll {
  .logo-min {
    //transition-delay: 700ms;
  transition: opacity $transition;
    opacity: 1;
    visibility: visible;
  }
  .visible-top {
    opacity: 0;
    visibility: visible;
  }
}
</style>

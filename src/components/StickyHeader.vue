<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="logo-min" to="/">
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
          <a href="#" class=" button-square">
            <svgicon name="contact" width="24" height="24" color=""></svgicon>
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>

export default {
  name: 'header'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../global_scss/colors.scss';
@import '../global_scss/base/_variables.scss';

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
  }
}

.navbar.onscroll {
  .logo-min {
         transition-delay: 700ms;
    opacity: 1;
    visibility: visible;
  }
  .visible-top{
    opacity: 0;
    visibility: visible;
  }
}
</style>

<template>

    <div class="home-project container section">

        <h3 v-bind:class="textClass">{{ client }}</h3>
        <div class="ipad">
            <img class="cover" v-bind:src="pathcover" title="brewster club" alt="brewster club">
            <svgicon class="case" title="ipag back" name="templates/ipad" color=""></svgicon>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ details }}</p>
        <div class="goto-container">
            <router-link class="button" v-bind:class="lineClass" to="/bye">{{ cta_msg }}</router-link>
        </div>

    </div>
</template>

<script>

export default {
    name: 'bye',
    props: ['projectname', 'client', 'title', 'details', 'pathcover'],
    data() {
        return {
            cta_msg: 'View project',
            lineClass: 'after-'+this.projectname,
            textClass: 'color-'+this.projectname
        }
    },
    mounted: function() {
  console.log(this.pathcover)
}
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../global_scss/colors.scss';

.home-project {
    min-height: 100vh;
        overflow: visible;
    .goto-container {
        height: 100%;
        display: block;
        overflow: visible;
        white-space: nowrap;
        .button {
            margin: 0;
            position: relative;
            display: inline-block;
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
            height: 1px;
            background: $white;
            left:100%;
            margin-left:1em;
        }
        }
    }
}

.ipad {
    position: relative;
    max-width: 100%;
    height: auto;
    float: left;
    margin-bottom: 0.5em; //mobile
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
</style>

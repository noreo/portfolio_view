<template>
    <div class="home-project">

        <h3>{{ client }}</h3>
        <div class="ipad">
            <img class="cover" src="../assets/projects/brewster/cover.jpg" title="brewster club" alt="brewster club">
            <svgicon class="case" title="ipag back" name="templates/ipad" color=""></svgicon>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ details }}</p>
            <router-link class="button color-brew" to="/bye">{{ cta_msg }}</router-link>

    </div>
</template>

<script>

export default {
    name: 'bye',
    props: ['project','client', 'title', 'details'],
    data() {
        return {
            cta_msg: 'View project',
            fileName: 'cover.jpg'
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-project{
      min-height: 100vh;
}
.ipad {
    position: relative;
    max-width: 100%;
    height: auto;
    float: left;
    margin-bottom: 2em;
    .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
       // max-width: 100%;
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

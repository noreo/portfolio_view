<template>
    <div class="homeproject">

        <h3>{{ client }}</h3>
        <div class="ipad">
           <img class="cover" src="../assets/projects/brewster/cover.jpg" title="brewster club" alt="brewster club">
            <svgicon title="ipag back" name="templates/ipad" width="368" height="262" color=""></svgicon>
        </div>

    </div>
</template>

<script>

export default {
    name: 'bye',
    props: ['client'],
    data() {
        return {
            msg: 'Byeeeee la',
            fileName: 'cover.jpg'
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ipad {
    position: relative;
    max-width: 100%;
        height: auto;
    
    float: left;
    .cover {
        position: absolute;
        top:0;right: 0;bottom: 0;left:0;
        max-width: 100%;
        padding:1em 2em;
        height: auto;
    }
}
</style>

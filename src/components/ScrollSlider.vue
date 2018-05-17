<template>
    <div class="home">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "scrollslider",
  data() {
    return {
      slideTime: 0.3, //sliding time
      spaceTime:0.2, //"space" beetwen 2 slides
      slideEase: Power3.easeOut, ///slide ease
      elementEase: Back.easeOut.config(2), // elements inside slide
    };
  },
  mounted: function() {
   // TweenLite.set("body", { perspective: 700 });
   TweenLite.lagSmoothing(300, 16);

    var slides = document.querySelectorAll(".section"),
      tl = new TimelineLite({ paused: true });
    for (var i = 0; i < slides.length; i++) {
      //if(i!=0){tl.addPause('pause'+i)};
      if (i != slides.length - 1) {
        tl
          .to(slides[i], this.slideTime, {
            top: '-100%',
           // autoAlpha: 0,
            ease:  this.slideEase
          })
          .from(
            slides[i + 1],
            this.slideTime,
            { top: '100%', 
           // autoAlpha: 0,
            ease: this.slideEase },
            "-=" + (this.slideTime - this.spaceTime)
          )
          .from(
            slides[i + 1].getElementsByTagName("p"),
            1,
            { y: "200%", ease: this.elementEase},
            "-=" + this.slideTime / 2
          ).from(
            slides[i + 1].getElementsByClassName("inner-goto-container"),
            1,
            { y: "100%", ease: this.elementEase},
            "-=" + (1 + this.slideTime / 2)
          )
          .addPause("pause" + i);
      }
    }
      TweenLite.lagSmoothing(500, 16);
    

    function GO(e) {
      var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
      if (SD < 0) {
        tl.play();
      } else {
        tl.reverse();
      }
    }
    document.addEventListener("mousewheel", GO);
    document.addEventListener("DOMMouseScroll", GO);
  }
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.section {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

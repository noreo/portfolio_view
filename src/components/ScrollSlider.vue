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
      isTop: true,
      slideTime: 0.7, //sliding time
      spaceTime: 0.2, //"space" beetwen 2 slides
      slideEase: Sine.easeInOut, ///slide ease
      elementEase: Circ.easeOut // elements inside slide
    };
  },
  methods: {
    emitCurrentIndex(index, isGoingDown) {
      
      if(isGoingDown){
        this.isTop = false;
      }
      else{
        this.isTop = (index == 0); //only true when going up and first slide
      }
        this.$emit("is-scroll", this.isTop);
    }
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
            top: "-100%",
            // autoAlpha: 0,
            ease: this.slideEase
          })
          .to(
            slides[i + 1],
            this.slideTime,
            {
              top: "0%",
              // autoAlpha: 0,
              ease: this.slideEase
            },
            "-=" + (this.slideTime - this.spaceTime)
          );

        tl.add("element" + i).to(
          slides[i + 1].getElementsByClassName("project__titles"),
          this.slideTime,
          {
            y: "0%",
            ease: this.elementEase,
            onStart: this.emitCurrentIndex,
            onReverseComplete: this.emitCurrentIndex,
            onStartParams: [i, true],
            onReverseCompleteParams: [i, false]
          },
          "element" + i + "-=" + this.slideTime / 2
        ).from(
          slides[i + 1].getElementsByClassName("container__img"),
          this.slideTime,
          {
           //top: "55%",
            opacity:0,
            ease: Circ.easeIn,
          },
          "element" + i + "-=" + this.slideTime
        );
        //container__img

        tl.addPause("pause" + i);
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
  top: 100%; //move sections down
  left: 0;
  &:first-child {
    top: 0; //except first one
  }
  .project__titles {
    transform: translateY(100%);
  }
}
</style>

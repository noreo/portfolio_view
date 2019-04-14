<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { Bus } from "../bus.js";

export default {
  name: "scrollslider",
  data() {
    return {
      isTop: true,
      slideTime: 0.7, //sliding time
      spaceTime: 0.2, //"space" beetwen 2 slides
      slideEase: Sine.easeInOut, ///slide ease
      elementEase: Circ.easeOut, // elements inside slide
      tl: new TimelineLite({ paused: true })
    };
  },
  methods: {
    emitCurrentIndex(index, isGoingDown) {
      this.$router.push({ query: { p: index } }); //set project index
      if (isGoingDown) {
        this.isTop = false;
      } else {
        this.isTop = index == 0; //only true when going up and first slide
      }
      this.$emit("is-scroll", this.isTop);
    },
    GO(e) {
      var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
      if (SD < 0) {
        this.tl.play();
      } else {
        this.tl.reverse();
      }
    }
  },
  mounted: function() {
    var slides = document.querySelectorAll(".section"),
      tl = new TimelineLite({ paused: true });
    for (var i = 0; i < slides.length; i++) {
      if (i != slides.length - 1) {
        this.tl.to(slides[i], this.slideTime, {
          top: "-100%",
          // autoAlpha: 0,
          ease: this.slideEase
        }).to(
          slides[i + 1],
          this.slideTime,
          {
            top: "0%",
            // autoAlpha: 0,
            ease: this.slideEase
          },
          "-=" + (this.slideTime - this.spaceTime)
        );
        var p = slides[i + 1].dataset.anchor;
        var pRev = slides[i].dataset.anchor;
        this.tl.add("element" + p)
          .to(
            slides[i + 1].getElementsByClassName("project__titles"),
            this.slideTime,
            {
              y: "0%",
              alpha: 1,
              ease: this.elementEase,
              onStart: this.emitCurrentIndex,
              onReverseComplete: this.emitCurrentIndex,
              onStartParams: [p, true],
              onReverseCompleteParams: [pRev, false]
            },
            "element" + p + "-=" + this.slideTime / 2
          )
          .from(
            slides[i + 1].getElementsByClassName("container__img"),
            this.slideTime,
            {
              //top: "55%",
              opacity: 0,
              ease: Circ.easeOut
            },
            "element" + p + "-=" + this.slideTime
          );
        //container__img

        this.tl.addPause("pause" + i);
      }
    }
    document.addEventListener("mousewheel", this.GO, false);
    document.addEventListener("DOMMouseScroll", this.GO, false);

    //gotocontact from home
    Bus.$on("movetocontact", function() {
      //move to contact
      this.tl.play("elementsite_contact");
    });

    //move to right session when page opens
    if (typeof this.$route.query.p !== "undefined") {
      // the variable is defined
      this.tl.play("element" + this.$route.query.p);
    }
  },
  beforeDestroy: function() {
    console.log("Stopping slidder");
    document.removeEventListener("mousewheel", this.GO, false);
    document.removeEventListener("DOMMouseScroll", this.GO, false);
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
    opacity: 0;
  }
}
</style>

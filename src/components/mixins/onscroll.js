export const onScroll = {
    data() {
      return {isScrolled: false};
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 5; //if is top: false
      }
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };
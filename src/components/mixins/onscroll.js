export const onScroll = {
    data() {
      return {isOnScroll: false};
    },
    methods: {
      handleScroll() {
        this.isOnScroll = window.scrollY > 5; //if is top: false
      }
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };
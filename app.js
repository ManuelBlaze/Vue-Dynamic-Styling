const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  watch: {
    boxASelected() {
      const that = this;
      setTimeout(() => {
        that.boxASelected = false;
      }, 500);
    },
    boxBSelected() {
      const that = this;
      setTimeout(() => {
        that.boxBSelected = false;
      }, 500);
    },
    boxCSelected() {
      const that = this;
      setTimeout(() => {
        that.boxCSelected = false;
      }, 500);
    },
  },
  methods: {
    boxSelected(box) {
      const selected = `box${box}Selected`;

      this[`${selected}`] = true;
    },
  },
});

app.mount("#styling");

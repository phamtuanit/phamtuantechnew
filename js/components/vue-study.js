export default {
  template: `<p>Template not found</p>`,
  templateFile: "vue-study.html",
  data() {
    return {
      logContent: ""
    };
  },
  created() {
    console.info("Vuejs compoent is initialized");
    $.fn.jsScope = this.jsScope;
  },
  methods: {
    run(tcCase) {
      console.log(`-----'${tcCase}'---->`);
      switch (tcCase) {
        case "jsscope":
          $.fn.jsScope();
          break;

        default:
          break;
      }
      console.log(`<----'${tcCase}'-----`);
    },
    jsScope() {}
  }
};

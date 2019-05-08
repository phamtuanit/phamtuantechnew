export default {
  template: `<p>Template not found</p>`,
  templateFile: "blog.html",
  data() {
    return {
      logContent: ""
    };
  },
  created() {
    console.info("Blog component is initialized");
    this["data"] = this.$data;
  },
  methods: {
    showDialog(msg) {
      this.data.logContent += msg + `\n`;
      console.log(`Show a dialog with message: '${msg}'`);
    },
  }
};

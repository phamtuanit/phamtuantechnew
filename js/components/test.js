export default {
  template: "<p>{{name}}</p>",
  data() {
    return {
      name: "Test component"
    };
  },
  created() {
    console.info("Test component is initialized");
  }
};

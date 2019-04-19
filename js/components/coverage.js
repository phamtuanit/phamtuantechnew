export default {
  template: "<p>{{name}}</p>",
  data: function() {
    return {
      name: "Coverage component"
    };
  },
  created() {
    console.info("Coverage component is initialized");
  }
};

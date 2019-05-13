export default {
  template: "#main-nav",
  data() {
    return {
      links: [
        {
          id: 0,
          display_name: "Shop",
          router: "/shop"
        },
        {
          id: 1,
          display_name: "Card",
          router: "/card"
        }
      ]
    };
  },
  created: function() {
    console.info("Vue-MainNav is initialized");
  }
};

import Coverage from "../../../js/components/coverage.js";
export default {};

describe("Coverage component", () => {
  // build component
  const Constructor = Vue.extend(Coverage);
  const CoverageComponent = new Constructor().$mount();

  it("Checking data() which should be defined", () => {
    expect(CoverageComponent.$data).toBeDefined();
  });

  it("Checking $el which should be defined", () => {
    expect(CoverageComponent.$el).toBeDefined();
  });

  it("Checking $el which should be defined", () => {
    expect(CoverageComponent.$el.textContent).toEqual("Coverage component");
  });
});

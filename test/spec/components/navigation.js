import Navigation from "../../../js/components/navigation.js";
export default {};

describe("Navigation component", () => {
  it("Checking template Id equal [#main-nav]", () => {
    expect(Navigation.template).toEqual("#main-nav");
  });

  const data = Navigation.data();

  it("Checking data() which should be defined", () => {
    expect(data).toBeDefined();
  });

  it("Checking data().links which should be defined", () => {
    expect(data.links).toBeDefined();
  });

  it("Checking data().links which has more than 1 item", () => {
    expect(data.links.length).toBeGreaterThan(1);
  });

  it("Checking data().links which equal 3", () => {
    expect(data.links.length).toEqual(3);
  });
});

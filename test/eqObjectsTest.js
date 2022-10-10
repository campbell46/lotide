const assert = require('chai').assert;
const _ = require('../index');

describe("#eqObjects", () => {
  it("return true if objects match", () => {
    assert.strictEqual(_.eqObjects({school: "Lighthouse", year: 2022, city: "Ottawa"}, {school: "Lighthouse", year: 2022, city: "Ottawa"}), true);
  });
});
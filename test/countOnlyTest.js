const assert = require('chai').assert;
const _ = require('../index');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


describe("#countOnly", () => {
  it("return object of items that were counted", () => {
    assert.deepEqual(_.countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason: 1, Fang: 2});
  });
});
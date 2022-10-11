const assert = require('chai').assert;
const _ = require('../index');

//test function, return object with selected item count
describe("#countOnly", () => {
  it("returns object of items that were counted", () => {
    assert.deepEqual(_.countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason: 1, Fang: 2});
  });
  it("returns undefined if object to be returned is empty", () => {
    assert.deepEqual(_.countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false }), undefined);
  });
});
const assert = require('chai').assert;
const _ = require('../index');

//test function, if 2 arrays are equal
describe("#eqArrays", () => {
  it("return true if arrays match", () => {
    assert.strictEqual(_.eqArrays([1,2,3], [1,2,3]), true);
  });
  it("return true if arrays match(array of arrays)", () => {
    assert.strictEqual(_.eqArrays(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
  });
});
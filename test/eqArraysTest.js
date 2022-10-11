const assert = require('chai').assert;
const _ = require('../index');

//test function, if 2 arrays are equal
describe("#eqArrays", () => {
  it("returns true if arrays match", () => {
    assert.strictEqual(_.eqArrays([1,2,3], [1,2,3]), true);
  });
  it("returns true if arrays match(array with inner array)", () => {
    assert.strictEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]], [[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns true if arrays match(array with multiple inner arrays)", () => {
    assert.strictEqual(_.eqArrays([[1, [2, [3]]], [4,[5]]], [[1, [2, [3]]], [4,[5]]]), true);
  });
});
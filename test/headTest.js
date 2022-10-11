const assert = require('chai').assert;
const _ = require('../index');

//test function, returns first element of array
describe("#head", () => {
  it("returns first element of array", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns first element of array with one element", () => {
    assert.strictEqual(_.head(['5']), '5');
  });
});
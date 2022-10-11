const assert = require('chai').assert;
const _ = require('../index');

//test function, flattens array with inner arrays
describe('#flatten', () => {
  it("returns flattened version of original array", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
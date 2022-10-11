const assert = require('chai').assert;
const _ = require('../index');

//test function, returns modified array based on passed in callback
describe("#map", () => {
  it("returns new modified array of array(get first char of element)", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns new modified array of array(get length of element)", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word.length), [6, 7, 2, 5, 3]);
  });
});
const assert = require('chai').assert;
const _ = require('../index');

describe("#map", () => {
  it("returns new modified array of array", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
});
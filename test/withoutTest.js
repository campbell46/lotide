const assert = require('chai').assert;
const _ = require('../index');

describe("#without", () => {
  it("return modified array without selected elements", () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
});
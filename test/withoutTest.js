const assert = require('chai').assert;
const _ = require('../index');

//test function, returns array without removed elements
describe("#without", () => {
  it("returns modified array without selected elements", () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it("returns modified array without selected elements(numbers/numbers as string)", () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", '2']);
  });
});
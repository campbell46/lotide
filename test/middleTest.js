const assert = require('chai').assert;
const _ = require('../index');

//test function, returns middle element of array, 2 if array length is even
describe("#middle", () => {
  it("returns blank array if only 1 element in array", () => {
    assert.deepEqual(_.middle[1]), [];
  });
  it("returns blank array if only 2 element in array", () => {
    assert.deepEqual(_.middle[1, 2]), [];
  });
  it("returns middle element for odd length arrays", () => {
    assert.deepEqual(_.middle[1, 2, 3]), [2];
  });
  it("returns 2 middle elements for even length arrays", () => {
    assert.deepEqual(_.middle[1, 2, 3, 4]), [2 ,3];
  });
  it("returns middle element for odd length arrays", () => {
    assert.deepEqual(_.middle[1 ,2 ,3 ,4 ,5]), [3];
  });
  it("returns 2 middle elements for even length arrays", () => {
    assert.deepEqual(_.middle[1, 2, 3, 4, 5, 6]), [3, 4];
  });
});
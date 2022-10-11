const assert = require('chai').assert;
const _ = require('../index');

//test function, returns sliced array without first element
describe("#tail", () => {
  it("returns length of modified array", () => {
    assert.strictEqual(_.tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns empty array for single element arrays", () => {
    assert.deepEqual(_.tail(['Lighthouse']), []);
  });
  it("returns array without first element", () => {
    assert.deepEqual(_.tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
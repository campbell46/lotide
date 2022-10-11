const assert = require('chai').assert;
// const _ = require('../index');
const eqObjects = require('../eqObjects');

//test function, if 2 objects are equal
describe("#eqObjects", () => {
  it("returns true if objects match", () => {
    assert.deepEqual(eqObjects({school: "Lighthouse", year: 2022, city: "Ottawa"}, {school: "Lighthouse", year: 2022, city: "Ottawa"}), true);
  });
  it("returns true if objects match, including objects with arrays", () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3, 4]}, { c: "1", d: ["2", 3, 4]}), true);
  });
  it("returns true if objects match, including objects with objects", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});
const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {
  it("returns 2 for length of array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns empty array for ['Lighthouse']", () => {
    assert.deepEqual(_.tail(['Lighthouse']), []);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
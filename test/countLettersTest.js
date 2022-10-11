const assert = require('chai').assert;
const _ = require('../index');

//test function, returns object of letter counts
describe("#countLetters", () => {
  it("returns letter count of character in string", () => {
    assert.deepEqual(_.countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });
});
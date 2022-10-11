const assert = require('chai').assert;
const _ = require('../index');

//test function, returns object with character counts
describe("#letterPositions", () => {
  it("returns object containing letter counts", () => {
    assert.deepEqual(_.letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4]});
  });
});
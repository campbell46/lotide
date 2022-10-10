const assert = require('chai').assert;
const _ = require('../index');

describe("#letterPositions", () => {
  it("return { h: [0], e: [1], l: [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(_.letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4]});
  });
});
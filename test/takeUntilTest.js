const assert = require('chai').assert;
const _ = require('../index');

//test function, returns slice array up until callback is true on element
describe("#takeUntil", () => {
  it("returns sliced array until targeted element reache(numbers)", () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns sliced array until targeted element reached(sentence)", () => {
    assert.deepEqual(_.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});
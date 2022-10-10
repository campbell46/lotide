const assert = require('chai').assert;
const _ = require('../index');

describe("#takeUntil", () => {
  it("return sliced array until targeted element reached", () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
});
const assert = require('chai').assert;
const _ = require('../index');

//test function, search for value in object
describe("#findKeyByValue", () => {
  it("returns key of searched value", () => {
    assert.strictEqual(_.findKeyByValue({sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, "The Wire"), 'drama');
  });
  it("returns undefined if value is not found", () => {
    assert.strictEqual(_.findKeyByValue({sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, "The Simpsons"), undefined);
  });
});
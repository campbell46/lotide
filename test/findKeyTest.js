const assert = require('chai').assert;
const _ = require('../index');

//test function, returns key of searched value
describe("#findKey", () => {
  it("returns key of searched value", () => {
    assert.strictEqual(_.findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 },"elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 }}, x => x.stars === 2), "noma");
  });
});
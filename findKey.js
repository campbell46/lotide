const { assertEqual } = require('./assertEqual');

const findKey = function(object, callback) {
  for (const item in object) {
    //if item.model equals 'wrangler' return item
    if (callback(object[item])) {
      return item;
    }
  }
};
  
assertEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 },"elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 }}, x => x.stars === 2), 'noma');

assertEqual(findKey({ "Mazda": {model: 'CX-5'}, "Honda": {model: 'Civic'}, "Ford": {model: 'F150'}, "Jeep": {model: 'wrangler'}, "Chevrolet": {model: 'Equinox'}}, x => x.model === 'wrangler'), 'Jeep');
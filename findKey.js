//function takes in an object and a callback, returns key when callback is true
const findKey = function(object, callback) {
  //loop through object properties
  for (const item in object) {
    //if callback is true return value
    if (callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;
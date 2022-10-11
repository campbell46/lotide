//function takes in an object and value, returns key to value input
const findKeyByValue = function(object, value) {
  let genre;
  //loop through object keys, checking if value is a match
  for (const key in object) {
    //if value of key eqauls value input return key
    if (object[key] === value) {
      genre = key;
      return genre;
    }
  }
};

module.exports = findKeyByValue;
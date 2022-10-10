const findKeyByValue = function(object, value) {
  let genre;
  //loop through object keys, checking if value is a match
  for (const key in object) {
    if (bestTVShowsByGenre[key] === value) {
      genre = key;
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;
//function takes in an array and a callback, callback repeats for each element
const map = function(array, callback) {
  const results = [];
  //loop through elements in array
  for (let item of array) {
    //push returned value to results
    results.push(callback(item));
  }
  //return new array
  return results;
};

module.exports = map;
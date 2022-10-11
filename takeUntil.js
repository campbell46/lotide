//function takes in an array and a callback, once callback is true, array is sliced up until element and returned
const takeUntil = function(array, callback) {
  let output = [];
  //loop through elements in array
  for (const item of array) {
    //if call back is true, slice array from begging up until item and break out of loop
    if (callback(item)) {
      output = array.slice(0, array.indexOf(item));
      break;
    }
  }
  //return new sliced array
  return output;
};

module.exports = takeUntil;
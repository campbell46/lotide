const takeUntil = function(array, callback) {
  let output = [];
  //loop through elements in array
  for (const item of array) {
    //if element < 0, slice array from begging up until item and break out of loop
    if (callback(item)) {
      output = array.slice(0, array.indexOf(item));
      break;
    }
  }
  return output;
};

module.exports = takeUntil;
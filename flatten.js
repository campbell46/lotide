//function takes in an array and flattens any arrays within it
const flatten = function(arr) {
  let flattenedArr = [];
  //loop through array
  for (let i = 0; i < arr.length; i++) {
    //if element is not an array, push to flattenedArr
    if (!Array.isArray(arr[i])) {
      flattenedArr.push(arr[i]);
      //if element is an array, loop through array and push elements to flattenedArr
    } else {
      let innerArr = arr[i];
      for (let j = 0; j < innerArr.length; j++) {
        flattenedArr.push(innerArr[j]);
      }
    }
  }
  //return new flattened array
  return flattenedArr;
};

module.exports = flatten;
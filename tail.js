//function takes in an array, returns new array containing all but first element
const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;
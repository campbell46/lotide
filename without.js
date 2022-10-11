//function takes in an array and a items to remove array, returns new array excluding removed items
const without = function(arr, itemsToRemove) {
  let newArray = [];
  //loop through aray, pushing every element to newArray
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
    //loop through items to remove, popping array index if match
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arr[i] === itemsToRemove[j]) {
        newArray.pop();
      }
    }
  }
  //return new array of item
  return newArray;
};

module.exports = without;
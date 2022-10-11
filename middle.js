//function takes in array, returns middle most element
const middle = function(arr) {
  let output = [];
  //variable to get the index of the middle element - 1 if even
  const midArrEven = arr[Math.floor(arr.length / 2 - 1)];
  //variable to get the index of the middle element
  const midArrOdd = arr[Math.floor(arr.length / 2)];
  //if array length is odd, push middle element
  if (arr.length > 2 && arr.length % 2 !== 0) {
    output.push(midArrOdd);
    // else if array lengthis even, push 2 middle elements
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    output.push(midArrEven, midArrOdd);
  }
  //return middle elements
  return output;
};

module.exports = middle;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passsed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//gets the head element in the array
const head = function(arr) {
  const firstEl = arr[0];
  return firstEl;
};

assertEqual(head([5,6.7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
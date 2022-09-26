const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passsed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1[" "], undefined);
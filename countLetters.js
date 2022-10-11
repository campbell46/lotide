//function takes in a sentence and returns a count of each letter
const countLetters = function(sentence) {
  let results = {};
  //loop through each letter in sentence
  for (const letter of sentence) {
    //if letter is a space, continue without counting
    if (letter === " ") {
      continue;
    }
    //if results already has this property, counter plus 1
    if (results[letter]) {
      results[letter] += 1;
      //if results does not have this property, add it with the count of 1
    } else {
      results[letter] = 1;
    }
  }
  //return new object with character count
  return results;
};

module.exports = countLetters;
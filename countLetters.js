const countLetters = function(sentence) {
  let results = {};
  //loop through each letter in sentence
  for (const letter of sentence) {
    //if letter is a space, continue without doing anything
    if (letter === " ") {
      continue;
    }
    //if results already has this property counter plus 1
    if (results[letter]) {
      results[letter] += 1;
      //if results does not have this property add it with the count of 1
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
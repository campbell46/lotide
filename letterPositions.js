//function takes in a sentence and returns an object containing the index of each character
const letterPositions = function(sentence) {
  const results = {};
  //loop through each character
  for (let i = 0; i < sentence.length; i++) {
    //continue if character is a space
    if (sentence[i] === " ") {
      continue;
    }
    //if letter is already a property in results, add another index of letter
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      //if letter is not already a property, add to results with current index
    } else {
      results[sentence[i]] = [i];
    }
  }
  //return new object with character index'
  return results;
};

module.exports = letterPositions;
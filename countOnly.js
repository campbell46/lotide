//function takes in 2 collections of items, returns a count of selected items
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //loop through allItems
  for (const item of allItems) {
    //if the item in itemsToCount is true
    if (itemsToCount[item]) {
      //if result object has item already, add 1 to count
      if (results[item]) {
        results[item] += 1;
        //else add it with the count being 1
      } else {
        results[item] = 1;
      }
    }
  }
  //if results is empty, return undefined
  if (Object.keys(results).length === 0) {
    return undefined;
  }
  //return new object containing item count
  return results;
};

module.exports = countOnly;
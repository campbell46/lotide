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
  return results;
};

module.exports = countOnly;
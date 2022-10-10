const findKey = function(object, callback) {
  for (const item in object) {
    //if item. equals 'wrangler' return item
    if (callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;
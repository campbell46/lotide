const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual(flatten([1,2,[9,8],3,4]), flatten([1,2,[9,8],3,4]));
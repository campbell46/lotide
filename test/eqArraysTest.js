const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const flatten = require('../flatten');

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**
`npm install @campbell46/lotide`

**Require it:**

`const _ = require('@campbell46/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // ==> [2, 3]`

##Documentation

The following functions are currently implemented:

* `head(...)`: return the first element of array
* `tail(...)`: return all but first element of array
* `middle(...)`: return middle element of array(2 if array has even number of elements)
* `flatten(...)`: return a flattened array of arrays
* `countOnly(...)`: return object containing selected array elements and they're count
* `countLetters(...)`: return object with letters and letter count from sentence
* `findKey(...)`: return object key when callback equals true
* `findKeyByValue(...)`: return object key when value is searched
* `letterPosition(...)`: return object of letters and their index' of sentence
* `map(...)`: return new array from looped array, repeating callback for each element
* `takeUntil(...)`: return sliced array up until callback is true
* `without(...)`: return new array of array with select elements removed
* `eqArrays(...)`: return true if arrays are equal
* `eqObjects(...)`; return true if objects are equal
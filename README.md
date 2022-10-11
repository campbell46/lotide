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

* `head(...)`: takes in an array and returns the first element
* `tail(...)`: takes in an array and returns everything except the first element
* `middle(...)`: takes in an array and returns the middle most element
* `flatten(...)`: takes in an array off arrays and returns a flattened version
* `countOnly(...)`: takes in a collection of items and returns specific key, value counts
* `countLetters(...)`: takes in a string and returns a count of each letter
* `findKey(...)`: takes in an object and a callback and returns the first key that makes the callback true
* `findKeyByValue(...)`: takes in an object and a value and returns the first key that matches that value
* `letterPosition(...)`: takes in a string and returns the index's of letters
* `map(...)`: takes in an array and a callback and returns a new array based on the callback
* `takeUntil(...)`: takes in an array and a callback and returns a slice of the array based on the callback
* `without(...)`: takes in an array and an itemsToRemove array and returns only the elements not found in the itemsToRemove array
* `eqArrays(...)`: takes in 2 arrays and returns true if they are equal, false otherwise
* `eqObjects(...)`; takes in 2 objects and returns true if they are equal, false otherwise
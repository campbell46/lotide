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

* `head(...)`: returns the first element of array
* `tail(...)`: returns all but first element of array
* `middle(...)`: returns middle element of array(2 if array has even number of elements)
* `flatten(...)`: returns a flattened array of arrays
"use strict";

function flatten(arr) {
  return arr.reduce((currentArray, nextElement) => {
    return Array.isArray(nextElement)
      ? [...currentArray, ...flatten(nextElement)]
      : [...currentArray, nextElement];
  }, []);
}
console.log(flatten([1, 2, {}, [3, [4], 5], [6, "seven"]])); // [1, 2, {}, 3, 4, 5, 6, "seven"]

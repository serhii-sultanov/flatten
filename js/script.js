"use strict";

// // 1

// function flatten(arr) {
//   const initialArray = [...arr];
//   const flattenedArray = [];

//   while (initialArray.length) {
//     const removedElement = initialArray.pop();
//     if (Array.isArray(removedElement)) {
//       initialArray.push(...removedElement);
//     } else {
//       flattenedArray.push(removedElement);
//     }
//   }

//   console.log(flattenedArray.reverse());
// }
// flatten([1, 2, {}, [3, [4], 5], [6, "seven"]]); // [1, 2, {}, 3, 4, 5, 6, "seven"]

// // 2

// function flatten(arr) {
//   return arr.reduce(function (currentArray, nextElement) {
//     if (Array.isArray(nextElement)) {
//       return currentArray.concat(flatten(nextElement)); // or
//       //   return [...currentArray, ...flatten(nextElement)];
//     }
//     return currentArray.concat(nextElement);
//   }, []);
// }
// console.log(flatten([1, 2, {}, [3, [4], 5], [6, "seven"]])); // [1, 2, {}, 3, 4, 5, 6, "seven"]

// // 3

// function flatten(arr) {
//   let flattened = [];
//   (function flat(arr) {
//     arr.forEach(function (el) {
//       if (Array.isArray(el)) flat(el);
//       else flattened.push(el);
//     });
//   })(arr);
//   return console.log(flattened);
// }
// flatten([1, 2, {}, [3, [4], 5], [6, "seven"]]); // [1, 2, {}, 3, 4, 5, 6, "seven"]

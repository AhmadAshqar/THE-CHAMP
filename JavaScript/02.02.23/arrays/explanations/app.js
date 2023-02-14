// What is array - collection of items such as number string objects etc.

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

// How to create an array - let array = [];
// The array can be collection of a lot of things such as numbers, strings, objects, etc

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

// To accesses an item in an array we can use the square brackets and the index you want to access array[index]. for example:
let array = [43, 676, 41, 323, 857, 45, 2, 6, 9]
console.log(array[3]); // => 323

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

// I have an array with 6 items: let array = [2,7,5,3,8,9]
// That mean i have range of 0-5, so if we will try to accesses array[5] we will get 9.
// But if we will try to accesses array[6] we will get an error, because we don't have index of 6 in the given array.

// So lets see it in action using for loop:

let array1 = [43, 676, 41, 323, 857, 45, 2, 6, 9]

// #GOOD
for (let i = 0; i < array.length; i++) {
  // i - (Iteration): 0  ||  Value: 43 - array[i]
  // i - (Iteration): 1. ||  Value: 676 - array[i]
  // i - (Iteration): 2. ||  Value: 41 - array[i]
  // i - (Iteration): 3. ||  Value: 857 - array[i]
  // i - (Iteration): 4. ||  Value: 45 - array[i]
  // i - (Iteration): 5. ||  Value: 2 - array[i]
  // i - (Iteration): 6. ||  Value: 2 - array[i]
  // i - (Iteration): 7. ||  Value: 6 - array[i]
  // i - (Iteration): 8. ||  Value: 9 - array[i]
}


// #BAD
for (let i = 0; i < array.length; i++) {
  // i - (Iteration): 0  ||  Value: 43 - array[i]
  // i - (Iteration): 1. ||  Value: 676 - array[i]
  // i - (Iteration): 2. ||  Value: 41 - array[i]
  // i - (Iteration): 3. ||  Value: 857 - array[i]
  // i - (Iteration): 4. ||  Value: 45 - array[i]
  // i - (Iteration): 5. ||  Value: 2 - array[i]
  // i - (Iteration): 6. ||  Value: 2 - array[i]
  // i - (Iteration): 7. ||  Value: 6 - array[i]
  // i - (Iteration): 8. ||  Value: 9 - array[i]
  // i - (Iteration): 9. ||  Error: because we don't have an index in position 9
}

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

function findMaxAge(arrayOfNumbers) {
  let max = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
      max = arrayOfNumbers[i];
    }
  }
  return max
}
let ages = [22, 45, 41, 19, 5, 32]
let age = findMaxAge(ages)
console.log(age); // => 45

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const prices = [10, 20, 30, 40, 50, 60, 70, 80]
let totalPrice = sumArray(prices)
console.log(totalPrice); // => 360

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

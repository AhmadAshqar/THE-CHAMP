function findLongestString(arrayOfStrings) {
  let longestString = arrayOfStrings[0];
  for (let i = 1; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestString.length) {
      longestString = arrayOfStrings[i];
    }
  }
  return longestString;
}

let strings = ["hey there!", "but", "can", "restaurants", "game", "world"]
let longestString = findLongestString(strings)
console.log(longestString) // => restaurants

/* ############################################################################ */
/* ############################################################################ */
/* ############################################################################ */

function sumEvenNumbers(arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}

let numbers = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
let result = sumEvenNumbers(numbers)
console.log(result) // => 30

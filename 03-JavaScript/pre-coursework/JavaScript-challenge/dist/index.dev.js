"use strict";

function isNumberPositive(number) {
  if (number < 0) {
    return false;
  }

  return false;
}

function convertDaysToAge(days) {
  return days / 356;
}

function getLargestNumber(a, b, c) {
  if (a > b & a > c) {
    return a;
  } else if (b > a & b > c) {
    return b;
  }

  return c;
}

function getLastName(names) {
  return names[names.length - 1];
}

function allNumbersPositive(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return false;
    }
  }

  return true;
} //TEST CASES


console.log(isNumberPositive(-1)); // returns false

console.log(isNumberPositive(10)); // returns true

console.log(convertDaysToAge(3650)); // returns 10

console.log(convertDaysToAge(6570)); // returns 18

console.log(getLargestNumber(2, 1, 4)); // returns 4

console.log(getLargestNumber(6, 2, 3)); // returns 6

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns “Andy”

console.log(getLastName(["Ash", "Stu"])); // returns "Stu"

console.log(allNumbersPositive([2, 4, 5])); // returns true

console.log(allNumbersPositive([-5, 4, 6])); // returns false
/*
  Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const curr =
      i % 3 == 0 && i % 5 == 0
        ? "FizzBuzz"
        : i % 3 == 0
        ? "Fizz"
        : i % 5 == 0
        ? "Buzz"
        : i.toString();

    result.push(curr);
  }
  return result;
};

const n = 21;
const final = fizzBuzz(n);
console.log(final);

//1. Finds bug

function solution(A) {
  var ans = 0;
  //before
  //for (i=1; i<A.length; i++)
  for (let i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}

const A = [-1, 1, -2, 2];
const result = solution(A);
console.log(result); //-2 (the smallest number)

/* 
Task 3
  Write a function:
    function solution(S);
  That, given a string S consisting of N lowercase letters, return the minimum number of letters that must be deleted
  To obtain a word in which every letter occurs a unique number of times. We only care about occurrences of letters
  That appear at least once in result.

  Examples:
  1. Given S = “aaaabbbb”, the function should return 1. We can delete one occurrence of a or one occurrence of b.
  Then one letter will occur four times and the other one three times.
  2. Given S = “ccaaffddecee”, the function should return 6. For example, we can delete all occurrences of e and f
  And one occurrence of d to obtain the word “ccaadc”. Note that both e and f will occur zero times in the new word,
  But that is fine, since we only care about letters that appear at least once.
  3. Given S = “eeee”, the function should return 0 (there is no need to delete any characters).
  4. Given S = “example”, the function should return 4.

  Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [0…300,000];
  - string S is made only of lowercase letters (a-z).
*/
function solution(S) {
  //Implement your solution here
  const charCount = {};
  let deletions = 0;

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    charCount[char] = charCount[char] || 0;
    charCount[char]++;
  }
  let arr = Object.values(charCount).sort().reverse();
  if (arr.length === 1) {
    return deletions;
  }
  let last = -1;
  for (const count of arr) {
    let finalNumber = count;
    if (last !== -1 && count === last) {
      deletions += 1;
      finalNumber = count - 1;
    } else if (last === 1) {
      deletions += count;
    }
    if (finalNumber !== 0 && last !== 1) {
      last = finalNumber;
    }
  }
  return deletions;
}

console.log(solution("aaaabbbb"));
console.log(solution("ccaaffddecee"));
console.log(solution("eee"));
console.log(solution("example"));

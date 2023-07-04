/*
  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
  starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
  Return the merged string.

  Example 1:

  Input: word1 = "abc", word2 = "pqr"
  Output: "apbqcr"
  Explanation: The merged string will be merged as so:
  word1:  a   b   c
  word2:    p   q   r
  merged: a p b q c r
*/

//Approach with 2 pointers

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i=0, j=0;
  let words ='';
  while(i < word1.length && j < word2.length){
      words += (words.length%2 ==0 ? word1[i++]:word2[j++])
      //if length of the words is even, add word1, otherwise add word2
  }
   while(i < word1.length){
    //if there are any remaining characters in word1, they are appended to words
      words += word1[i++]
  }
  while (j < word2.length){
      words += word2[j++]
  }
 
  return words;

}
const word1 = "and";
const word2 = "bcy";
const result = mergeAlternately(word1,word2)
console.log(result);//expected result abncdy

//With 1 pointer
 let maxLength = Math.max(word1.length, word2.length)
    let words = '';
    for(let i =0; i < maxLength; i++ ){
        words += (word1[i] || '') + (word2[i] || '') // || is used to overcome if there is remaining words
    }
    return words;
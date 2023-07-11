/*
  Given an input string s, reverse the order of the words.
  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
  Return a string of the words in reverse order concatenated by a single space.
  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

  Example 1:
  Input: s = "the sky is blue"
  Output: "blue is sky the"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const resultWord = [];
  let currentWord = [];
  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i) === ' '){
      //found the space, put word in front (if there is any)
      currentWord.length > 0 &&  resultWord.unshift(currentWord.join(''));
      currentWord = [];
    }else{
      currentWord.push(s.charAt(i))
    }
  }
  //handle the case when the input string s ends without a space after the last word.
  currentWord.length > 0 && resultWord.unshift(currentWord.join('')); 
  return resultWord.join(' ');
};

const s = "I am under the water";
console.log(reverseWords(s));
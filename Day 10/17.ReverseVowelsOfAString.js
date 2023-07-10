/*
  Given a string s, reverse only all the vowels in the string and return it.  
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

  Example 1:
  Input: s = "hello"
  Output: "holle"

  Example 2:
  Input: s = "leetcode"
  Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = new Set('aiueoAIUEO');
  const stack = [];

  for (word of s){
      if(vowels.has(word)){
          stack.push(word)
      }
  }
  let final = '';
  for(let i =0; i<s.length; i++){
      if(vowels.has(s[i])){
          final += stack.pop();
      }else{
          final += s[i];
      }
  }
  return final;
}

//another approach (but not passed 1 testcase)
  /*const vowels = ['a','i','u','e','o'];
  const toArray = s.toString().split('').map((v,i)=>({
      value : v,
      i : i,
      isVowel : vowels.includes(v)
  }));
  const reverseArr = toArray.filter(v => v.isVowel)
  .reduce((acc,curr,i,array)=>{
      return{
          ...acc,
          [array[array.length-1-i].i] : curr.value, 
      };
  }, {});

  const finalArr = toArray.map((v, i)=>{
      if(v.isVowel){
          return reverseArr[i]
      }else{
          return v.value;
      }
  })
  return finalArr.join('');
 
  
}; */

const s = ["babel"];
console.log(reverseVowels(s))
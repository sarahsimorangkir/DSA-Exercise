/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
 */

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length))
};

const str1 ='ABCABC';
const str2 = 'ABC';
const result = gcdOfStrings(str1, str2);
console.log(result);//ABC

/* PROSES:
Line 15 : check if string not equals (not have GCD) setelah ditambahkan will return empty string ,
Ini dikarenakan jika ada GCD, maka kedua string tersebut dapat digabungkan secara bergantian dalam urutan yang berbeda tanpa mengubah hasil akhirnya.
misal str1 = LEET, str2 = CODE = LEETCODE,CODELEET (sama) 

Line 16 : use euclidean algorithm, find the greatest common divisor (fpb) dari length dari a,b 
  - Pertama, kondisi (0 === b) diperiksa. Jika b sama dengan 0, itu berarti a adalah GCD yang diinginkan. 
    in this case expression will return value of a.
  - if b not equals to 0, maka GCD belum ditemukan. then expression return gcd(b, a % b)
  
  Misalnya, jika a adalah 12 dan b adalah 8, proses akan terjadi seperti ini:
  Pada pemanggilan pertama, (0 === 8) tidak terpenuhi, jadi rekursi dilanjutkan dengan pemanggilan gcd(8, 12 % 8), yang menjadi gcd(8, 4).
  kedua, (0 === 4) tidak terpenuhi, jadi rekursi dilanjutkan dengan pemanggilan gcd(4, 8 % 4), yang menjadi gcd(4, 0).
  ketiga, (0 === 0) terpenuhi, dan nilai a (yaitu 4) dijadikan sebagai GCD.

Line 17 : substring() untuk mengambil substring dari str1, 
  misal str1 = ABCABC(length: 6), str2 = ABC(length: 3), maka gcd: 3;
  setelah itu substring str1 akan diambil dari indeks 0 ke indeks 3. dan akan return ABC.


*/
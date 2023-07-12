let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let thousand = ['', 'thousand', 'million', 'billion', 'trillion'];

function numberToWords(number){
  if(number === 0){
    return 'zero';
  }
  let words = '';
  let i = 0;
  
  while (number  > 0 ) {
    if(number % 1000 !== 0){
      words = convert(number % 1000) + ' ' + thousand[i] + ' '  + words;
    }
    number = Math.floor(number / 1000);
    i++;
  }
  return words.trim();
}

function convert(number){
  if(number === 0){
    return '';
  } else if(number < 20){
    return ones[number];
  } else if(number < 100){
    return tens[Math.floor(number / 10)] + ' ' + convert(number % 10);
  }else {
    return ones[Math.floor(number / 100)] + ' hundred ' + convert(number % 100);
  }
}

/**
 * 3021 % 1000 -> 21
 * three thousand twenty one
 * 
 * 40021 % 1000
 * 
 */

// 1. Test case 
// 0 -> zero
console.log(numberToWords(0) === 'zero');
// 12 -> twelve
console.log(numberToWords(12));
console.log(numberToWords(12) === 'twelve');
// 20 -> twenty
console.log(numberToWords(20));
console.log(numberToWords(20) === 'twenty');
// 31 -> thirtyone, 41 -> fortyone
console.log(numberToWords(41));
console.log(numberToWords(41) === 'forty one');
// 201 -> two hundred 1
console.log(numberToWords(201));
console.log(numberToWords(201) === 'two hundred one');
// 1001 -> one thousand one
console.log(numberToWords(1001));
console.log(numberToWords(1001) === 'one thousand one');
// 1021 -> one thousand twenty one
console.log(numberToWords(1021));
console.log(numberToWords(1021) === 'one thousand twenty one');
// hundred, thousand, million, billion

console.log(numberToWords(9998));
console.log(numberToWords(9998) === 'nine thousand nine hundred ninety eight');

console.log(numberToWords(99999));

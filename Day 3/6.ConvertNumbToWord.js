function numberToWords(number) {
  const singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number === 0) {
    return 'zero';
  }

  let words = '';

  // Thousands
  if (number >= 1000) {
    words += singleDigits[Math.floor(number / 1000)] + ' thousand ';
    number %= 1000;
  }

  // Hundreds
  if (number >= 100) {
    words += singleDigits[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }

  // Tens and Ones
  if (number >= 20) {
    words += tens[Math.floor(number / 10)] + ' ';
    number %= 10;
  } else if (number >= 11) {
    words += teens[number % 10] + ' ';
    number = 0;
  }

  // Single digits
  if (number > 0) {
    words += singleDigits[number] + ' ';
  }

  return words.trim().toLowerCase();
}

/*
Another approach :

const number = 2357;
const words = numberToWords(number);
console.log(words);

let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if ((number = number.toString()).length > 9) return 'overflow';
    n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
    */
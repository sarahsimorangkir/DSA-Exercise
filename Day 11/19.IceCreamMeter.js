function iceCreamMeter (lateNum){
  lateNum = lateNum > 23 ? 23 : lateNum;
    let tempLate = lateNum - 3;
    let totalPaid = tempLate > 0 ? tempLate * 10000 + 15000 : lateNum * 5000;
    return totalPaid >= 50000 ? totalPaid * 2 : totalPaid;
}
let lateNum = 3;
// console.log(iceCreamMeter(lateNum));


// 53 - 23 = 20 => paid(23) + paid(20)
function iceCreamMeterV2(lateNum){
  let total = 0;
  while(lateNum > 0){
    let tempLate = lateNum > 23 ? 23 : lateNum;
    let sub = tempLate - 3;
    let totalPaid = sub > 0 ? sub * 10000 + 15000 : tempLate * 5000;
    total += totalPaid > 50000 ? totalPaid * 2 : totalPaid;
    lateNum -= 23;
  }
  return total;
}
lateNum = 46;
// 490000 + 15000 => 505000
console.log(iceCreamMeterV2(lateNum));
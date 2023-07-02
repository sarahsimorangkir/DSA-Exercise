/*
  Question:
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
  Return the running sum of nums.

  Example 1:
  Input: nums = [1,2,3,4]
  Output: [1,3,6,10]
  Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

const runningSum = function(nums) {
  let start = 0;

  //let listNum = [];

  // for (i of nums){
  //   start += i;
  //   listNum.push(start);
  // }
  // return listNum;
  return nums.map((num)=>{
    start += num;
    return start;
  })

}

const nums = [1,2,3,5,7];
const result = runningSum(nums);
console.log(result);

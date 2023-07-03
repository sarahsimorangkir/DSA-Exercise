/*
  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
  Merge nums1 and nums2 into a single array sorted in non-decreasing order.
  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
  where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
  
  Example 1:

  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */

  /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// complexity: O(n log n)
// var merge = function(nums1, m, nums2, n) {
//   for(let i=m, j=0; j<n; i++, j++){ 
//     nums1[i] = nums2[j];
//     nums1.sort((a,b)=>b-a);
//   }
// }
/* 
process:
  i = m means index num1 start from the lengdth of num 1
  j = 0 means start from 0, to retrieve the num2 and insert to num1
  j<n = means ensures that the elements of nums2 will only be used during iterations as long as nums2 is
  then nums1[i] = nums2[j] means that elemant in nums 2 is insert to nums1
  finally, nums1 array is sorted in ascending order. 
  The function modifies the nums1 array in place without returning any value.
 
*/

//another approach with complexity O(m + n)
var merge = function(nums1, m, nums2, n) {
  let i = m-1;
  let j = n-1;
  let k = m + n - 1;
  //-1 means that to access the last valid element in an array, we need to subtract 1 from the length because of the zero-based indexing.

  while(i >= 0 && j >= 0 ){ 
    if (nums1[i] > nums2[j]){ //if nums1[i] is greater than nums2, then nums1 is store in nums1[k]
      nums1[k] = nums1[i];
      i--;//iteration iterate back one step.
    }else{
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0){ //when there is remaining element in j
    nums1[k] = nums2[j]; // then j is added to k
    j--;
    k--;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const filterResult = [];
  //use forloop
  // for(let i = 0; i < arr.length; i++){
  //   if(fn(arr[i], i)){
  //     filterResult.push(arr[i]);
  //   }
  // }
  // return filterResult;
  
  //use forEach
  arr.forEach((value,index)=>{
    if(fn(value,index)){
      filterResult.push(value);
    }
  })
  return filterResult;
};
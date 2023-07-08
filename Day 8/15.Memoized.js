/* 
  Given a function fn, return a memoized version of that function.
  A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
  You can assume there are 3 possible input functions: sum, fib, and factorial.
      -sum accepts two integers a and b and returns a + b.
      -fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
      -factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

  Example 1:
  Input
  "sum"
  ["call","call","getCallCount","call","getCallCount"]
  [[2,2],[2,2],[],[1,2],[]]
  Output
  [4,4,1,3,2]

  Explanation
  const sum = (a, b) => a + b;
  const memoizedSum = memoize(sum);
  memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
  memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
  // Total call count: 1
  memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
  // Total call count: 2
*/


/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {}; //store previously result
  return function(...args) {//return new function that takes in any number of arguments
      const key = JSON.stringify(args); //convert arguments to into string as a key for cache object

      if(key in cache){ //if key already exist in cache,
          return cache[key]; //return cache value
      }

      const result = fn.apply(this, args);//if doesnt exist, call original funtionn use apply() to pass the arguments and store result in cache
      cache[key] = result; //using key as property name

      return result //return result
      
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/
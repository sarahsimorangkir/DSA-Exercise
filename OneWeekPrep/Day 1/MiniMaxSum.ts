function miniMaxSum(arr: number[]): void {
    // Write your code here
    let totalSum = 0;
    for(let i=0; i < arr.length; i++){
        totalSum += arr[i];
    }
    let min =Infinity;
    let max =-Infinity;
    
    for(let i=0; i< arr.length; i++){
        let excludeOne = totalSum - arr[i];
        if(excludeOne < min){
            min = excludeOne
        }
        if(excludeOne > max){
            max = excludeOne
        }
    }
    
    console.log(min, max)
}

/*
Sample Input
1 2 3 4 5

Sample Output
10 14
*/
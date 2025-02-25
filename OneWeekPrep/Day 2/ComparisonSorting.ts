function countingSort(arr: number[]): number[] {
    // Write your code here
    const result: number[] = new Array(100).fill(0); //create an array of 100 elements and fill it with 0
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]++;
    }
    return result;
}

const arrInput = [1,2,1,3,3];
const result = countingSort(arrInput);
console.log(result);
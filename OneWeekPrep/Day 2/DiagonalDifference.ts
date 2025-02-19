function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let diagonalTopRight = 0;
    let diagonalTopLeft = 0;
    let n = arr.length;
    
    for (let i = 0; i < arr.length; i++){
        diagonalTopRight += arr[i][i];
        diagonalTopLeft += arr[i][n-i-1];
    }
    
    return Math.abs(diagonalTopRight-diagonalTopLeft)
}
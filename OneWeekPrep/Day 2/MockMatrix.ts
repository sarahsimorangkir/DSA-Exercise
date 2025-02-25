function flippingMatrix(matrix: number[][]): number {

    /*
     for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const max = Math.max(
            matrix[i][j],
            matrix[i][2 * n - 1 - j],
            matrix[2 * n - 1 - i][j],
            matrix[2 * n - 1 - i][2 * n - 1 - j]
            );
            maxSum += max;
            }
        }

     */
    const n = matrix.length / 2;
    let maxSum = 0;
    const maxIndex = 2 * n - 1; //avoid recomputing multiple times

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //select the maximum value from the four possible reflections
            maxSum += Math.max(
                matrix[i][j], 
                matrix[i][maxIndex - j],
                matrix[maxIndex - i][j],
                matrix[maxIndex - i][maxIndex - j]
            );
        }
    }
    
    return maxSum;
}

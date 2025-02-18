
function plusMinus(arr: number[]): void {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let total = arr.length;

    arr.forEach(num => {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else {
            zero++;
        }
    });

    console.log((positive / total).toFixed(6));
    console.log((negative / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 1, 0, -1, -1]);
plusMinus([1, -2, -7, 9, 1, -8, -5])

/* Expected output:



*/

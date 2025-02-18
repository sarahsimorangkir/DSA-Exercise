function findMedian(numbers: number[]): number {
    const sorted = numbers.sort((a, b) => a - b);
    console.log("Sorted:", sorted);

    const mid = Math.floor(sorted.length / 2);
    console.log("Mid index:", mid);

    if (sorted.length % 2 === 0) {
        //add both middle numbers first, then divide by 2
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

console.log(findMedian([7, 1, 2, 3, 5]));  // Odd case
console.log("==============");
console.log(findMedian([1, 2, 5, 7, 3, 4, 8, 9]));  // Even case

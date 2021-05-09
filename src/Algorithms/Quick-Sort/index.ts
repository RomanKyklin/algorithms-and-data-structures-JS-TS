/**
 * Quick Sort algorithms implemented
 * Overall time complexity of Insertion sort is O(n2)
 * @param {Array} arr
 * @return {Array}
 */
export const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    let pivotIndex = pivot(arr);

    return [
        ...quickSort(arr.slice(0, pivotIndex + 1)),
        ...quickSort(arr.slice(pivotIndex + 1, arr.length))
    ];
}

export const pivot = (arr: number[], start: number = 0, end: number = arr.length - 1): number => {
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivotValue > arr[i]) {
            swapIndex += 1;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];

    return swapIndex;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

/**
 * Quick Sort algorithms implemented
 * Overall time complexity of Quick sort is O(nLogN), worst O(n^2) if arrays is partly sorted
 * @param {Array} arr
 * @return {Array}
 */
export const quickSort = (arr: number[]): number[] => {
    if (arr.length === 0) return [];

    let left = [], right = [], pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

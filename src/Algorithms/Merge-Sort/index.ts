/**
 * Merge sort algorithms implemented
 * Overall time complexity of Insertion sort is O(n2)
 * @param {Array} arr
 * @return {Array}
 **/
export const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    let arrCopy = [...arr];


    return arrCopy;
}

/**
 * Merging sorted arrays into one sorted array
 * @param {Array<number>} firstArr
 * @param {Array<number>} secondArr
 * @return {Array<number>}
 */
export const merge = (firstArr: number[], secondArr: number[]): number[] => {
    let firstArrSortedIndex = 0;
    let secondArrSortedIndex = 0;
    let isSorted = false;
    let result: number[] = [];

    while (!isSorted) {
        if (!firstArr[firstArrSortedIndex]) {
            result = [...result, ...secondArr.splice(secondArrSortedIndex, secondArr.length - 1)];
            isSorted = true;
            break;
        }

        if (!secondArr[secondArrSortedIndex]) {
            result = [...result, ...firstArr.splice(firstArrSortedIndex, firstArr.length - 1)];
            isSorted = true;
            break;
        }


        if (firstArr[firstArrSortedIndex] < secondArr[secondArrSortedIndex]) {
            result.push(firstArr[firstArrSortedIndex]);
            firstArrSortedIndex += 1;
        }

        if (firstArr[firstArrSortedIndex] > secondArr[secondArrSortedIndex]) {
            result.push(secondArr[secondArrSortedIndex]);
            secondArrSortedIndex += 1;
        }
    }

    return result;
}

console.log(merge([1, 2, 3], [6, 7, 10]))

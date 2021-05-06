/**
 * Merge sort algorithms implemented
 * Overall time complexity of Insertion sort is O(n2)
 * @param {Array} arr
 * @return {Array}
 **/
export const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        console.log('return arr', arr);
        return arr
    }
    console.log(arr);

    return merge(
        mergeSort(arr.splice(Math.floor(arr.length / 2), arr.length - 1)),
        mergeSort(arr)
    );
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
    let result: number[] = [];

    while (true) {
        if (!firstArr[firstArrSortedIndex]) {
            result = [...result, ...secondArr.splice(secondArrSortedIndex, secondArr.length)];
            break;
        }

        if (!secondArr[secondArrSortedIndex]) {
            result = [...result, ...firstArr.splice(firstArrSortedIndex, firstArr.length)];
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

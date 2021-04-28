/**
 * @param {Array} arr
 * @return {Array}
 */
export const insertionSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const result = [...arr];
    let currentSortedIndex = 0;
    let currentNonSortedIndex = 1;
    let nonSorted = true;

    do {
        if (result[currentNonSortedIndex] != null) {
            for (let i = currentSortedIndex; i >= 0; i--) {
                if (result[currentNonSortedIndex] < result[i]) {
                    let tmp = result[currentNonSortedIndex];
                    result[currentNonSortedIndex] = result[i];
                    result[i] = tmp;
                    console.log('if statement', result);
                } else {
                    currentSortedIndex++;
                    currentNonSortedIndex++;
                    break;
                }
            }
        } else {
            console.log('sorted')
            nonSorted = false;
        }
    } while (nonSorted)
    console.log('return result');
    return result;
}

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

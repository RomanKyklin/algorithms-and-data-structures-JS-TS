/**
 * Insertion Sort algorithms implemented
 * Overall time complexity of Insertion sort is O(n2)
 * @param {Array} arr
 * @return {Array}
 */
export const insertionSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    let arrCopy = [...arr];

    for (let i = 0; i < arrCopy.length; i++) {
        let tmp = arrCopy[i];

        for (var j = i - 1; j > -1 && arrCopy[i] > tmp; j--) {
            arrCopy[j + 1] = arrCopy[j];
        }

        arrCopy[j + 1] = tmp;
    }

    return arrCopy;
}

console.log(insertionSort([10, 5, 3]));
// console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

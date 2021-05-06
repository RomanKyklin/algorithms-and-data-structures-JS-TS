/**
 * Insertion Sort algorithms implemented
 * Overall time complexity of Insertion sort is O(n2)
 * @param {Array} arr
 * @return {Array}
 */
export const insertionSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    let arrCopy = [...arr];

    for (let i = 1; i < arrCopy.length; i++) {

        let k = i;
        while (k > 0 && arrCopy[k - 1] > arrCopy[k]) {
            [arrCopy[k], arrCopy[k - 1]] = [arrCopy[k - 1], arrCopy[k]];
            k -= 1;
        }
    }

    return arrCopy;
}

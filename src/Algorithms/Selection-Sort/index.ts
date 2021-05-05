/**
 * Selection sort algorithm implementation
 * @return {Array<number>}
 * @param {Array<number>} arr
 */
export const selectionSort = (arr: number[]): number[] => {
    let min;
    let arrCopy = [...arr];
    let sortedIndex = 0;
    let minIndex = 0;

    while (arrCopy[sortedIndex] != null) {
        for (let i = sortedIndex; i < arrCopy.length; i++) {
            if (min == null || arrCopy[i] < min) {
                min = arrCopy[i];
                minIndex = i;
            }
        }

        let tmp = arrCopy[sortedIndex];
        arrCopy[sortedIndex] = min;
        arrCopy[minIndex] = tmp;
        sortedIndex += 1;
        min = null;
    }

    return arrCopy;
}

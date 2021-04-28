/**
 * @param {Array} arr
 * @return {Array}
 */
export const bubbleSort = (arr: number[]): number[] => {
    const result = [...arr];
    let isSwapped;

    do {
        isSwapped = false;

        for (let i = 0; i < arr.length; i++) {
            if (result[i] > result[i + 1]) {
                let [first, second] = [result[i], result[i + 1]];
                result[i] = second;
                result[i + 1] = first;
                isSwapped = true;
            }
        }
    } while (isSwapped);

    return result;
}

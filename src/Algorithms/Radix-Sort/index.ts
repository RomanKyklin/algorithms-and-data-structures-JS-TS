/**
 * Radix Sort algorithm implementation
 * Time Complexity - Best: O(nk), Average: O(nk), Worst O(nk)
 * Space Complexity - O(n + k)
 * @return {Array<number>}
 * @param {Array<number>} arr
 */
export const radixSort = (arr: number[]): number[] => {
    let mostDigitsCount = mostDigits(arr);

    for (let k = 0; k < mostDigitsCount; k++) {
        let digitsBucket = Array.from({length: 10}, () => []);

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitsBucket[digit].push(arr[i]);
        }
        arr = [].concat(...digitsBucket);
    }

    return arr;
}

export const getDigit = (number: number, position: number): number | null => {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

export const digitCount = (number: number): number => {
    if (number === 0) return 1;

    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

export const mostDigits = (arr: number[]): number => {
    return arr.reduce((acc: number, value: number) => {
        let maybeMax = digitCount(value);
        acc = acc < maybeMax ? maybeMax : acc
        return acc;
    }, 0)
}

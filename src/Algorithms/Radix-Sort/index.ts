export const radixSort = (arr: number[]): number[] => {
    return [];
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


console.log(mostDigits([1234, 67, 7]));

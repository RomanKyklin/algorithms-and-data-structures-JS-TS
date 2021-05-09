export const radixSort = (arr: number[]): number[] => {
    return [];
}

export const getDigit = (number: number, position: number): number | null => {
    let numberAtGivenPosition = String(number)[position - 1];

    return numberAtGivenPosition != null ? +(String(number)[position - 1]) : null;
}

console.log(getDigit(100, 4));

function twoNumberSumHashMap(array: number[], targetSum: number): [number?, number?] {
    // Write your code here.
    const hashMap: Map<number, number> = new Map<number, number>();

    return []
}

console.log(twoNumberSumHashMap([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]

function twoNumberSumPointers(array: number[], targetSum: number): [number?, number?] {
    // Write your code here.
    array.sort((a: number,b: number) => a - b);
    return []
}

console.log(twoNumberSumPointers([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]

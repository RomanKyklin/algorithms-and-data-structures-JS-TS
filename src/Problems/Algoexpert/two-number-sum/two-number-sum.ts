function twoNumberSumHashMap(array: number[], targetSum: number): [number?, number?] {
    // Write your code here.
    const hashMap: Map<number, boolean> = new Map<number, boolean>();

    for (let i = 0; i < array.length; i++) {
        const difference = targetSum - array[i]

        if (hashMap.has(difference)) {
            return [difference, array[i]];
        }

        hashMap.set(array[i], true);
    }

    return [];
}

console.log(twoNumberSumHashMap([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]

function twoNumberSumPointers(array: number[], targetSum: number): [number?, number?] {
    // Write your code here.
    array.sort((a: number, b: number) => a - b); // -4, -1, 1, 3, 5, 6, 8, 11
    let leftPointer: number = 0;
    let rightPointer: number = array.length - 1;

    while (leftPointer < rightPointer) {
        if (array[leftPointer] + array[rightPointer] === targetSum) return [array[leftPointer], array[rightPointer]];

        if ((array[leftPointer] + array[rightPointer]) < targetSum) {
            leftPointer += 1;
        } else {
            rightPointer -= 1;
        }
    }

    return [];
}

console.log(twoNumberSumPointers([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]

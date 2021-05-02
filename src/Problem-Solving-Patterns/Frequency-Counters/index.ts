/*
 * This pattern uses objects or sets to collect values / frequencies of value
 * This can often avoid the need for nested loops or O(n^2) operations with arrays / strings
 */

/*
 * EXAMPLE:
 * Write a function called same, which accepts two arrays. The function should return true if every value in the array
 * has it's corresponding value squared in the second array. The frequency of values must be the same.
 */

/**
 * A Naive solution with Time Complexity - O(n^2)
 * @return {boolean}
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 */
const naiveSame = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

/**
 * An optimized solution with Time Complexity - O(n)
 * @return {boolean}
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 */
const optimizedSame = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1: { [key: number]: number } = {}
    let frequencyCounter2: { [key: number]: number } = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        // @ts-ignore
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // @ts-ignore
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}


console.log(optimizedSame([1, 2, 3], [4, 1, 9])) // true
console.log(optimizedSame([1, 2, 3], [1, 9])) // false
console.log(optimizedSame([1, 2, 1], [4, 4, 1]))// false (must be same frequency)

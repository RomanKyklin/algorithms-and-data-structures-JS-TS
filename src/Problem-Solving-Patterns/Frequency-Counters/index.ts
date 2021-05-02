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
const same = (arr1: number[], arr2: number[]): boolean => {
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

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1]))// false (must be same frequency)

/*
 * This pattern uses objects or sets to collect values / frequencies of value
 * This can often avoid the need for nested loops or O(n^2) operations with arrays / strings
 */

/*
 * EXAMPLE:
 * Write a function called same, which accepts two arrays. The function should return true if every value in the array
 * has it's corresponding value squared in the second array. The frequency of values must be the same.
 */

const same = (arr1: number[], arr2: number[]): boolean => {
    return true;
}

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

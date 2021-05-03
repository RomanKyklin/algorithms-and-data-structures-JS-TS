/*
    Creating pointers or values that correspond to an index or position and move towards the beginning,
    end or middle based on a certain condition.
    Very efficient for solving problems with minimal space complexity as well.
 */


/*
    EXAMPLE:
    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair does not exist
 */

/**
 * Naive solution
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 * @param {Array<number>} arr
 * @return {Array<number>}
 */
const sumZero = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/**
 * Refactored solution with multiple pointers pattern
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 * @return {Array<number>}
 * @param {Array<number>} arr
 */
const sumZeroFrequencyPattern = (arr: number[]): number[] => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

/**
 * EXAMPLE 2:
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
 */

/**
 * Naive solution
 * @return {number}
 * @param {Array<number>} arr
 */
const countUniqueValues = (arr: number[]): number => {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) result.push(arr[i]);
    }
    return result.length;
}

/**
 * Optimized solution with multiple pointers pattern
 * @return {number}
 * @param {Array<number>} arr
 */
const countUniqueValuesMultiplePointers = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    let result = 1;
    let startIndex = 0;
    let nextIndex = 1;

    do {
        if (arr[startIndex] !== arr[nextIndex]) result += 1;
        startIndex += 1;
        nextIndex += 1;
    } while (arr[startIndex] != null && arr[nextIndex] != null);

    return result;
}

console.log(countUniqueValuesMultiplePointers([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValuesMultiplePointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValuesMultiplePointers([])) // 0
console.log(countUniqueValuesMultiplePointers([-2, -1, -1, 0, 1])) // 4

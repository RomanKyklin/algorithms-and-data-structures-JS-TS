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

const countUniqueValues = (arr: number[]): number => {
    return 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

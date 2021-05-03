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

const sumZeroFrequencyPattern = (arr: number[]): number[] => {
    return [];
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

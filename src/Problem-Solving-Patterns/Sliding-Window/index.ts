/**
 * TODO PATTERN DESCRIPTION:
 * This pattern involves creating a window which can either be an array or number from one position to another
 * Depending on a certain condition, the window either increases or closes (and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc.
 **/

/**
 * TODO EXAMPLE #1
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 **/

/**
 * A Native approach
 * Time Complexity - O(N^2)
 * @return {number}
 * @param {Array<number>} arr
 * @param {number} num
 */
const maxSubarraySum = (arr: number[], num: number): number => {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    let temp: number;

    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

/**
 * An Optimized approach with sliding window pattern
 * Time Complexity - O(N)
 * @return {number}
 * @param {Array<number>} arr
 * @param {number} num
 */
const maxSubarraySumSlidingWindow = (arr: number[], num: number): number => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

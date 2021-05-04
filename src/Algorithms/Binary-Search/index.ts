/**
 * Binary Search Algorithm implementation
 * BigO - worst and average O(logN), best O(1)
 * @param {Array<*>} arr
 * @param {*} search
 */
export const binarySearch = (arr: any[], search: any): number | null => {
    let currentIndex = Math.floor(arr.length / 2);
    let left = 0;
    let right = arr.length - 1;

    // 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    while (arr[currentIndex] !== search && left <= right) {
        if (arr[currentIndex] == null) return null;

        if (arr[currentIndex] === search) return currentIndex;

        if (arr[currentIndex] > search) {
            right = currentIndex - 1;
        } else if (arr[currentIndex] < search) {
            left = currentIndex + 1;
        }
        currentIndex = Math.floor((left + right) / 2);
    }

    return arr[currentIndex] === search ? currentIndex : null;
}

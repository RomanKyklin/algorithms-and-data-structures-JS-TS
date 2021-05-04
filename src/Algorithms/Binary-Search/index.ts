/**
 * Binary Search Algorithm implementation
 * BigO - worst O(logN), best O(1)
 * @param {Array<*>} arr
 * @param {*} search
 */
export const binarySearch = (arr: any[], search: any): number | null => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return null;
}

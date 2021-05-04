/**
 * Linear Search Algorithm implementation
 * BigO - worst O(n), best O(1)
 * @param {Array<*>} arr
 * @param {*} search
 */
export const linearSearch = (arr: any[], search: any): number | null => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return null;
}

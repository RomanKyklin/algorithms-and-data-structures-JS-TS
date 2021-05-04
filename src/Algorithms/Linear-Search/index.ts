export const linearSearch = (arr: any[], search: any): number | null => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return null;
}

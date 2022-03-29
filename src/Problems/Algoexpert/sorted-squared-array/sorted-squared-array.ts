export function sortedSquaredArray(array: number[]) {
    // Write your code here.
    return array.map(value => value ** 2).sort((a,b) => a - b);
}

export function sortedSquaredArrayOptimal(array: number[]) {
    // Write your code here.
    let left = 0;
    let right = array.length - 1;
    let result = new Array(array.length).fill(0);
    let i = array.length - 1;

    do {
        if (left === right) {
            result[i] = array[left] ** 2;
        } else if (Math.abs(array[left]) >= Math.abs(array[right])) {
            result[i] = array[left] ** 2;
            left++;
        } else if (Math.abs(array[left]) <= Math.abs(array[right])) {
            result[i] = array[right] ** 2;
            right--;
        }
        i--;
    } while(i >= 0)

    console.log(left, right, i);
    return result;
}

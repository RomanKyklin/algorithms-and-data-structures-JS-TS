export function nonConstructibleChange(coins: number[]) {
    // Write your code here.
    coins.sort((a: number, b: number) => a - b);

    return 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])) // 20p

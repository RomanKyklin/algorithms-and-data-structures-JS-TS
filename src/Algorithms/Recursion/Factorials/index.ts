export const factorialsIterative = (num: number): number | null => {
    if (num < 0) return null;

    if (num < 2 && num > 0) return 1;

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

export const factorialsRecursive = (num: number): number | null => {
    if (num < 0) return null;

    if (num < 2 && num > -1) return 1;

    return num * factorialsRecursive(num - 1);
}

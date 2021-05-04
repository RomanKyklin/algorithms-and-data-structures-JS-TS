/**
 * Naive String Search Algorithm implementation
 * @param {string} string
 * @param {string} substr
 * @return {number}
 */
export const naiveStringSearch = (string: string, substr: string): number => {
    let count = 0;
    let index = 0
    let subStrIndex = 0;

    while (string[index] != null) {
        if (string[index] === substr[subStrIndex]) {
            if (subStrIndex === substr.length - 1) {
                count += 1;
                subStrIndex = 0;
            } else {
                subStrIndex += 1;
            }
        } else {
            subStrIndex = 0;
        }

        index++;
    }

    return count;
}

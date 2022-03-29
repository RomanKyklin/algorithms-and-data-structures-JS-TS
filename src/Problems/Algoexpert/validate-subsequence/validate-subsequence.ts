export function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let arrayPointer = 0;
    let sequencePointer = 0;

    while (arrayPointer < array.length && sequencePointer < sequence.length) {
        let [arrayValue, sequenceValue] = [array[arrayPointer], sequence[sequencePointer]];

        if (arrayValue === sequenceValue) {
            arrayPointer++;
            sequencePointer++;
        } else {
            arrayPointer++;
        }
    }
    return sequencePointer === sequence.length;
}

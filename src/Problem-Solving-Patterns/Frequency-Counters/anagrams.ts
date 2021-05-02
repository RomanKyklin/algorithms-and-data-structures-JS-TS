// @ts-ignore
String.prototype.removeCharAt = function (i: number): string {
    let tmp = this.split(''); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

/*
    EXAMPLE #2
    Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
    formed from iceman
 */
export const validAnagram = (str1: string, str2: string): boolean => {
    let index: number;

    for (let i = 0; i < str1.length; i++) {
        index = str2.indexOf(str1[i]);

        if (index === -1) {
            return false;
        }

        // @ts-ignore
        str2 = str2.removeCharAt(index + 1);
    }
    return true;
}


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt'))// true
console.log(validAnagram('texttwisttime', 'timetwisttext'))// true

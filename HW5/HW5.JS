let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function that takes an array as input and returns the array reversed. Avoid using the built-in reverse method.
console.warn('Task - 1 - Function that takes an array as input and returns the array reversed');

function reverseArray(arr) {
    if (Array.isArray(arr)) {
        let resArr = [];
        arr.forEach(x => resArr.unshift(x));
        return resArr;
    } else {
        throw new TypeError("Not Array!!");
    }
};

let reverseArr = reverseArray(inputArr);
console.log(inputArr);
console.log(reverseArray(inputArr));

// Given an array of numbers, write a function to find and return the maximum number in the array.
console.warn('Task - 2 - find and return the maximum number in the array');

function maxNumInArray(arr) {
    let maximumNum = null;
    arr.forEach(x => {
        if (maximumNum == null || x > maximumNum) maximumNum = x;
    })
    return maximumNum;
}
console.log(maxNumInArray(inputArr));

//Write a function that removes duplicate elements from an array and returns the new array with only unique elements.
console.warn('Task - 3 - removes duplicate elements from an array and returns the new array with only unique elements');

function removeArrayDups(arr) {
    let resArr = [];
    arr.forEach(x => {
        if (!(resArr.includes(x))) {
            resArr.push(x);
        }
    });
    return resArr;
}

let inputDupsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inputDupsArr);
console.log(removeArrayDups(inputDupsArr));

//String Tasks:
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
console.warn('Task - 4 - checks if a given string is a palindrome');

function isPalindrome(str) {
    let strLen = str.length;
    let iteration = Math.round(strLen / 2);

    let res = false;
    if (strLen > 1) {
        for (let i = 0; i < iteration; i++) {
            if (str[i].toLowerCase() == str[str.length - i - 1].toLowerCase()) {
                res = true;
            } else {
                res = false;
                break;
            }
        }
    }
    return res;
}

console.log('tattarrattaT', isPalindrome('tattarrattaT'));
console.log('10234500543201', isPalindrome('10234500543201'));
console.log('test', isPalindrome('test'));
console.log('a', isPalindrome('a'));

// Implement a function that checks if two strings are anagrams (contain the same characters in different orders).
console.warn('Task - 5 - checks if two strings are anagrams');

function isAnagrams(str1, str2) {
    let res = false;
    // console.log(str1.toLowerCase().split('').sort().join(''));
    // console.log(str2.toLowerCase().split('').sort().join(''));

    if (str1.toLowerCase().split('').sort().join('') ==
        str2.toLowerCase().split('').sort().join('')
    ) res = true;

    return res;
}

console.log('flow', 'wolf', isAnagrams('flow', 'Wolf'));
console.log('flow', 'walf', isAnagrams('flow', 'walf'));

// Write a function that finds and returns the first non-repeating character in a string.
console.warn('Task - 5 - finds and returns the first non-repeating character in a string');

function firstNonRepeatingChar(str) {
    let ind = null;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i], str.indexOf(str[i]), str.lastIndexOf(str[i]));
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            ind = (ind === null) ? str.indexOf(str[i]) : ind;
        }
    }
    return str[ind];
}
console.log(firstNonRepeatingChar('characterch'));
console.log(firstNonRepeatingChar('aksdfghjklasdfghj'));

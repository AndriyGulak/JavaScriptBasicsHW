// 1. Write a function getFirstElement that takes an array and returns its first element. If the array is empty, the function should return undefined.
console.warn('Task - 1 - Function getFirstElement()');

let myArr = [89, 12, 3, 45, 123, 93];
let myEmptyArr = [];

function getFirstElement(arr) {
    if (Array.isArray(arr)) {
        return arr[0];
    } else {
        throw new TypeError("Not Array!!");
    }
};

try { console.log("First element in normal array is: " + getFirstElement(myArr)); } catch (e) { console.error(e.stack); }
try { console.log("First element in empty array is: " + getFirstElement(myEmptyArr)); } catch (e) { console.error(e.stack); }
try { console.log("First element in string: " + getFirstElement("test string")); } catch (e) { console.error(e.stack); }

// 2. Write a function sumArray that takes an array of numbers and returns the sum of all elements in the array. 
console.warn('Task - 2 - Function sumArray()');

// we can add isNaN() check if needed 
function sumArray(arr) {
    if (Array.isArray(arr) && !(arr.some(isNaN))) {
        return arr.reduce((sum, x) => sum + x);
    } else {
        throw new TypeError("Not Array!!");
    }
}

let numArr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"] // !!! - in this case array.some(isNaN) works incorrect and sumArray() also
let strArr = [1, "23", "abc"]
try { console.log("Sum of string array is: " + sumArray(strArr)); } catch (e) { console.error(e.stack); }
try { console.log("Sum of number array is: " + sumArray(numArr0)); } catch (e) { console.error(e.stack); }
try { console.log("Sum of mixed array is: " + sumArray(numArr1)); } catch (e) { console.error(e.stack); }

// 3. Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.
console.warn('Task - 3 - Function reverseArray()');

function reverseArray(arr) {
    if (Array.isArray(arr)) {
        let resArr = [];
        arr.forEach(x => resArr.unshift(x));
        return resArr;
    } else {
        throw new TypeError("Not Array!!");
    }
}

let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArr = reverseArray(inputArr);
console.log(reverseArr);
console.log(reverseArray(strArr));

// 4. Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only even numbers.
console.warn('Task - 4 - Function filterEvenNumbers()');

function filterEvenNumbers(arr) {
    let fArr = arr.filter(x => x % 2 === 0);
    return fArr;
}

console.log("Input array: " + inputArr);
console.log("Even numbers of 'Input array': " + filterEvenNumbers(inputArr));

// 5. Write a function removeDuplicates that takes an array and returns a new array with all duplicate elements removed.
console.warn('Task - 4 - Function removeDuplicates()');

function removeDuplicates(arr) {
    let resArr = [];
    arr.forEach(x => {
        //console.log(typeof (x));
        if (!(resArr.includes(x))) {
            resArr.push(x);
        }
    });
    return resArr;
}

const obj = {
    objName: "object",
    objValue: "test",
    objId: 12345
};

let dupArr = [1, 5, "1", 1, 6, 5, "22", 10, 10, false, false, true, 12.56, 12.56, obj, obj];
console.log(removeDuplicates(dupArr));
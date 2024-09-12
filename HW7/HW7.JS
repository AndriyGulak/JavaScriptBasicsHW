//Write a function combineArrays that takes two arrays and returns a new array containing all the elements of both arrays using the.
console.warn('Task - 1 - Function combineArrays().');

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(combineArrays(arr1, arr2));
//Create a function sumAll that accepts any number of arguments using the and returns their sum.
console.warn('Task - 2 - Function sumAll().');

function sumAll(...num) {
    return num.reduce((res, num) => res + num, 0);
};

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(6, 7, 8, 9));

//Write a function safeParseJSON that accepts a JSON string and tries to parse it.
//If parsing fails, it should return an error message instead of throwing an error.
console.warn('Task - 3 - Function safeParseJSON().');

function safeParseJSON(jsonStr) {
    let res;
    try {
        res = JSON.parse(jsonStr);
    } catch (e) {
        return "Not JSON string!";
        //throw new TypeError("Not JSON string!!");
    }
    return res;
};

let jsonStr1 = '{ "name":"John", "age":30, "car":null}';
let jsonStr2 = '{ "name":"John"; "age":30; "car":null}';

console.log("jsonStr = " + jsonStr1);
console.log(safeParseJSON(jsonStr1));
console.log("jsonStr = " + jsonStr2);
console.log(safeParseJSON(jsonStr2));


//Write a function validateAge that accepts an age as an argument.
//If the age is less than 18, throw an error with a custom message.
//Handle the error using try...catch.
console.warn('Task - 4 - Function validateAge().');

function validateAge(age) {
    if (age < 18) {
        throw new Error("Age less than 18!");
    }
    return "Your age is Ok!";
};

console.log(validateAge(18));
try {
    console.log(validateAge(17));
} catch (e) {
    console.log(e)
};


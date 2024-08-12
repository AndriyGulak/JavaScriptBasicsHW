function addElement(text) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

// 1. Create variables for each of the primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt)
// and print their types using the typeof operator
console.warn('Task - 1');
addElement("Task - 1");

let varNumber = 123.12;
let varString = "string variable";
let isVarBoolean = true;
let varNull = null;
let varUndefined;
const varSymbol = Symbol('SSS');
let varBigInt = 12231234352345423523452323453445342n;

console.log(typeof (varNumber));
console.log(typeof (varString));
console.log(typeof (isVarBoolean));
console.log(typeof (varNull));
console.log(typeof (varUndefined));
console.log(typeof (varSymbol));
console.log(typeof (varBigInt));

addElement("varNumber =  " + varNumber.toString() + " = " + typeof (varNumber));
addElement("varString =  " + varString.toString() + " = " + typeof (varString));
addElement("varString =  " + isVarBoolean.toString() + " = " + typeof (isVarBoolean));
addElement(`varNull = ${varNull} = ${typeof (varNull)}`);
addElement(`varUndefined = ${varUndefined} = ${typeof (varUndefined)}`);
addElement(`varSymbol = ${varSymbol.description} = ${typeof (varSymbol)}`);
addElement(`varSymbol = ${varBigInt} = ${typeof (varBigInt)}`);

// 2. Create three strings using single quotes, double quotes, and backticks. 
// Use string methods to convert one of the strings to uppercase, another to lowercase, and check if the third contains a specific substring.
console.warn('Task - 2');
addElement("Task - 2");

let singleQuotes = 'Single Quotes', doubleQuotes = "Double Quotes", backticks = `Backticks`;
console.log(singleQuotes.toUpperCase());
console.log(doubleQuotes.toLowerCase());
console.log(backticks.includes('ck'));
console.log(backticks.includes('zx'));

addElement(`toUpperCase = ${singleQuotes.toUpperCase()}, toLowerCase =  ${doubleQuotes.toLowerCase()}, includes = ${backticks.includes('ck')}`);

// 3. Write a function that accepts a number and returns it as a string with two decimal places.
console.warn('Task - 3');
addElement("Task - 3");

function numberToString(num) {
    if (isNaN(num)) {
        return null;
    }
    else {
        return Number.parseFloat(num).toFixed(2);
    }
}

let x = numberToString('wergf');
console.log(x);
x = numberToString(1346756.9876);
console.log(x);

addElement(`numberToString('wergf') = ${numberToString('wergf')}, numberToString(1346756.9876) =  ${numberToString(1346756.9876)}`);

// 4. Create an object with properties for a book (title, author, year). Print each property using both dot notation and bracket notation.
console.warn('Task - 4');
addElement("Task - 4");

let book = {
    title: "JavaScript for kids",
    author: " Nick Morgan",
    year: 2018
}

console.log(`Book: title = ${book.title}, author = ${book.author}, year = ${book.year}`);
console.log(`Book: title = ${book['title']}, author = ${book['author']}, year = ${book['year']}`);
addElement(`Book: title = ${book.title}, author = ${book.author}, year = ${book.year}`);

// 5. Create an array of five numbers, add a number to the end, remove the first number, and print the modified array.
console.warn('Task - 5');
addElement("Task - 5");

let arrayOfNumber = [1, 3, 5, 7, 9];
console.log(arrayOfNumber);
addElement(`arrayOfNumber = ${arrayOfNumber}`);

arrayOfNumber.push(0);
arrayOfNumber.shift();

console.log(arrayOfNumber);
addElement(`arrayOfNumber = ${arrayOfNumber}`);

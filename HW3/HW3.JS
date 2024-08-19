// 1. Write a program that checks whether a number is positive, negative, or zero using the if...else statement.
function checkNumber(num) {
    if (isNaN(num)) {
        return 'Not a number!';
    } else if (num < 0) {
        return 'Number is negative!';
    } else if (num == 0) {
        return 'Number is zero!';
    } else if (num > 0) {
        return 'Number is positive!';
    } else return 'Error!';
}
console.warn('Task - 1 - checks a number');
console.log(checkNumber(10));
console.log(checkNumber(-8));
console.log(checkNumber(0));
console.log(checkNumber('one'));

// 2. Use a for loop to print the multiplication table for numbers from 1 to 10.
console.warn('Task - 2 - the multiplication table for numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 3. Write a program that uses a while loop to print all even numbers from 1 to 20.
console.warn('Task - 3 - even numbers from 1 to 20');
let num = 1;
while (num <= 20) {
    if (num % 2 == 0)
        console.log(num)
    num++;
}

// 4. Use a switch statement to print the name of the day of the week based on a number (1 for Monday, 7 for Sunday).
console.warn('Task - 4 - the name of the day of the week based on a number');
function dayName(num) {
    switch (num) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
        default:
            return 'Not a day';
    }
}

let dayNum = 5;
console.log(dayName(dayNum));

// 5. Write a program that uses a do...while loop to calculate the sum of numbers from 1 to 100.
console.warn('Task - 5 - calculate the sum of numbers from 1 to 100');
let i = 0, sum = 0;
do {
    sum += i;
    i++;
} while (i <= 100)

console.log(sum);
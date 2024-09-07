//Create an object named user that stores information such as name, age, and gender. 
//Add a method greet to the object that logs a greeting message including the user's name.
console.warn('Task - 1 - Create an object named user.');

let user = {
    name: 'Andrii',
    age: 39,
    gender: 'male',
    greet: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

user.greet();

//Create an object and make a shallow copy of it using both Object.assign and the spread operator (...).
//Modify the properties in the cloned object and check if the original object remains unchanged.
console.warn('Task - 2 - Copy an object using both Object.assign and the spread operator (...).');

const car0 = { Maker: 'BMW', Model: '3' };
const car1 = { Cost: 100500 };
Object.assign(car1, car0);
const car2 = { ...car0 };

console.log('car0', car0);
console.log('car1', car1);
console.log('car2', car2);
car1.Model = 'X5';
car2.Model = 'I8';
console.log('car0', car0);
console.log('car1', car1);
console.log('car2', car2);

//Use a for...in loop to iterate over the properties of an object and log each key and value to the console.
console.warn('Task - 3 - Log key and value of object.');

let myUser = {
    name: 'Andrii',
    age: 39,
    gender: 'male',
    greet: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

for (const key in myUser) {
    console.log(`key = ${key}, value = ${myUser[key]}`);
}
// Given an array of user objects, use the map method to create a new array containing just the names of the users.
console.warn('Task - 4 - use the map method to create a new array containing just the names of the users.');

const user1 = { name: 'user1', age: 1, gender: 'male' };
const user2 = { name: 'user2', age: 2, gender: 'male' };
const user3 = { name: 'user3', age: 3, gender: 'male' };
const user4 = { name: 'user4', age: 1, gender: 'male' };

let users = [user1, user2, user3, user4];
let names = users.map(x => x.name);
//let test = users.map(({ name, age }) => ({ name, age }));

console.log(names);
//console.log(test);

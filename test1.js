console.log('hello!, from Node.js');

const fs = require('fs');
const { callback } = require('util');
fs.writeFileSync('hello.txt', "Hello from me");

let name = "Paul";
let age = 29;
let hasHobbies = true;
// const = constant never changes
// let = can change

// arrowfunction with multiple concates 
const summerUser = (userName, userAge, userHasHobby)  => {

    return ( 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}
console.log(summerUser(name, age, hasHobbies));

// arrowfunction with one 
const add = (a, b) => a + b;
console.log(add(1,2));

// arrowfunction with 1 argument 
const addOne = a => a + 5;
console.log(addOne(3));

// arrowfunction with no arguments
const addRandom = () => 5 + 30;
console.log(addRandom());

// objects
const person = {
    name: "Dan",
    age: 45,
    //can add functions to object:
    greet() {
        console.log('Hi, I am ' +this.name);
    }
}
console.log(person);
person.greet();

// arrays
const moreHobbies = ['Sports', 'Cooking', 'Camping'];
for (let hobby of moreHobbies) {
    console.log(hobby);
}
console.log(moreHobbies.map(hobby => 'Hobby: ' + hobby));

// even though it is a const we are not changing the constant just the thing that it is pointing at 
moreHobbies.push('Programming');
console.log(moreHobbies);

// Spread and Rest Operators 

// copy an array use slice 
const copiedArray = moreHobbies.slice();
console.log(copiedArray);
// OR 
// nested array 
const copiedArray2 = [moreHobbies];
console.log(copiedArray2);
// make it a spread operator 
const copiedArray_spread = [...moreHobbies];
console.log(copiedArray_spread);
// rest operator  merge multiple arguments to an array
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));

// Destructuring 
const person2 = {
    name: "Frank",
    age: 23,
    //can add functions to object:
    greet() {
        console.log('Hi, I am ' +this.name);
    }
}

const printName = ({name, greet}) => {
    console.log(name, greet);

}
printName(person2);

// Async Code and Promises 

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    return promise;
};

// Async takes time to display 
setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

// displays immediately 
console.log("hello");
console.log("bye");

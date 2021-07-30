// Function
// - Fundamental building block in the program
// - Subprogram can be used multiple times
// - Performs a task or calculates a value

// - 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// nameing: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
// console.log(ellie);
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = 'unknown'
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
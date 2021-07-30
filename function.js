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
	// 	from = 'unknown'
	// }
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	// for (let i = 0; i < args.length; i++) {
	//   console.log(args[i]);
	// }

	// for (const arg of args) {
	// 	console.log(arg);
	// }

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned bt another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
	console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// anonymous function
const printYes = function() {
	console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
	console.log('simplePrint!');
}

// Same this
// const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
    switch (command) {
        case 'add':
            return a + b;
            // break;

        case 'substract':
            return a / b;
            // break;

        case 'divide':
            return a / b;
            // break;

        case 'remainder':
            return a % b;
            // break;

        default:
            return 'no command';
            // break;
    }
}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 1, 3));
console.log(calculate('divide', 5, 3));
console.log(calculate('remainder', 5, 3));
console.log(calculate('asdf', 1, 3));
// console.log(calculate('add', 1, 3));
// console.log(calculate('add', 1, 3));
// console.log(calculate('add', 1, 3));
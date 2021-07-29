// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:
'''
1 + 2 = ${1 + 2}
'''`);

console.log('minho\'s \nbo\tok');

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) ; // 3 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x += y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing

// if (nullableObject != null) {
// 	console.log('test');
// }

function check() {
	for (let i=0; i<10; i++) {
		// wasting time
		console.log('Wasting Time!!!');
	}
	return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

console.log('Equality Test');

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const laliga1 = {team: 'madrid'};
const laliga2 = {team: 'madrid'};
const laliga3 = laliga1;

console.log(laliga1 == laliga2); // false
console.log(laliga1 === laliga2); // false
console.log(laliga1 === laliga3); // true

// equality - puzzler
console.log('Equaliry - Puzzler Test');
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
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
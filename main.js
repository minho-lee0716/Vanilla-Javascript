// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

console.log('hello world');

let a;
a = 6;

// 2. Variable
// let (added in ES6)

let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
	console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

{
	age = 4;
	var age;
}

console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// Mutable(바뀔 수 있는 값) >> let
// Immutable(바뀔 수 없는 값) >> const

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types(어떤 프로그래밍 언어든, primitive 타입과 object 타입으로 나뉘어 있음.)
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity. NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 숫자 끝에 n만 붙이면 됨, 하지만 크롬이랑 파이어폭스에서만 지원을 하기에 아직은 사용X
const bigInt  = 1234567890123456789012345678901234567890n; // over (-2 * 53) ~ (2 * 53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// let x; 는 let x = undefined; 와 같다.
let x;
console.log(`value: ${x}, type: ${typeof x}`);
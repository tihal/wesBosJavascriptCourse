// Types Acronym - SNOBUSN
// String, Number, Object, Boolean, Undefined, Symbol, Null

/*eslint-disable*/
// STRINGS
const firstName = 'Tyler'; 
const middleName = "H";
const lastName = `Halstead`
// Single quotes and backquotes are identical; useful when enclosing quotes or apostrophes in your string.
// You can escape a character with a backslash

const sentence = "He's a great developer";
const sentenceTwo = 'There\'s never a better time than now';

// Single and double quotes can't do multi-line strings easily

// Backticks allow for multiline strings
// Concatenation = two or more strings combined into one
// Interpolation = variable inserted inside of a string

const html = `
<div>
    <h1></h1>
</div>
`;

// Backticks allow for easy string interpolation
const hello = `Hello, I am ${firstName}. Very nice to meet you`;

// NUMBERS
// typeof will tell you what the variable type is
// JS does not differentiate between int and float
// If you try to do math with strings, it will convert them to numbers for you - although this is bad practice
// JS will do basic calculations, as well as more complex calulations automatically

let a = 25;
let b = 14;

let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;

Math.round(a);
Math.floor(b);
Math.ceil(c);
Math.random();

// Modulo operator returns the remainder after division of one number by another.

const modulo = a % b;
console.log(modulo);

// Floating point math in JS is not accurate. If you're ever working in money, store values in whole numbers instead of floats
// If you try to calculate a number higher than the computer can calculate, it will default to infinity

//OBJECTS
// Everything in JS is an object

const myFirstObject = {
itemOne: 'Tyler Halstead',
itemTwo: 'Byler Balstead',
itemThree: 3000
};

console.log(myFirstObject.itemOne); //logs Tyler Halstead

// NULL vs. UNDEFINED
// Undefined occurs when a variable has 

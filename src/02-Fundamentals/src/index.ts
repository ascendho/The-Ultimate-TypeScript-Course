// Built-in Types

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// we don't need to explicitly indicate the type of data

let type = 'beginner';  // string

// Any Type

let level;                     // any
// this is against the idea of typescript,
// and you'd better not use it

level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}

// Arrays

// avoid any[] type array
let numbers = [];
numbers[0] = 1;
numbers[1] = '1';

// do this
let digits: number[] = [];

// Tuples (internally it's plain javascript array)

let users: [number, string] = [1, 'Mosh'];

// Enums

// using const enum, index.js will generate more optimized code
const enum Size {Small = 1, Medium, large};
let mySize = Size.Medium;

console.log(mySize);



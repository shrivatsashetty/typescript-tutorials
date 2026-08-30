let username: string = "hi shri";

console.log(username);

// implicit inference
let a = 1;
let b = 3;
let c = '2';

// explicit inference 
let sum: number;
let product: number;

sum = a + b;

product = b * Number(c);
// product = b * c; // will throw an error

console.log(`sum = ${sum}`);
console.log(`product = ${product}`);



# Typescript Arrays

## Arrays
Here's the syntax for declaring arrays in typescript

```ts
// for array of single data type
let arrayName: typeName[];
```

Examples:

```ts
let greetings: string[] = ["Hi", "Hello", "Namaste"];

greetings[0] = "Bunjor";
// greetings[1] = 2; // throws error

let books: string[] = [];
books = ["Mans Search for Meaning", "Sherlock Holmes", "Breif History of Time"];
// books.push(5); // throws error
```

Arrays can also hold data of multiple specified types using the union operator:
```ts
// for array of union type
let arrayName: (type1 | type2 | type3)[];
```

Example:
```ts
/* Array of Union Type, 
 * can be used to store values of multiple specified data types.
 * Also the order of the types does not matter in an array */ 
let scooters: (string | number)[] = ["Rizta", "Konark", 450];
scooters[0] = 100;
scooters.push("450x");
scooters.push(500);


let arrMixedTypes: (string | number | boolean)[] = ["AI", 2001, true];

/* A subset type can be assigned to a superset type, but the reverse is not true  */
arrMixedTypes = scooters;
// scooters = mixeddArr // throws error

/* If we do not specify a type during intialization of a variable in TypeScript,
 * by default the type will be any[] */ 
let test = []; 
test.push(0);
test.push("Hi");

```

## Tuple

A tuple is a typed array with a pre-defined length and types for each index.

```ts
/* Tuples */
let groceryList: [number, string, boolean];

groceryList = [1, "Atta(1Kg)", true];
console.log(groceryList); // [1, 'Atta(1Kg)', true]
// mutating a tuple
groceryList[0] = 2;
groceryList[1] = "Oranges";
groceryList[2] = false;
console.log(groceryList); // [2, 'Oranges', false]

// groceryList[3] = "Peaches"; // throws error
// gorceryList[0] = [2, "Ragi", false, "1Kg"]; // throws error

groceryList.push("Corn Flour"); // doesn't throw error
// console.log(groceryList[3]); // throws error

console.log(groceryList);
```
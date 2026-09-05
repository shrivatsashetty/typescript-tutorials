let greetings = ["Hi", "Hello", "Namaste"];
greetings[0] = "Bunjor";
// greetings[1] = 2; // throws error
let books = [];
books = ["Mans Search for Meaning", "Sherlock Holmes", "Breif History of Time"];
// books.push(5); // throws error
/* Array of Union Type,
 * can be used to store values of multiple specified data types.
 * Also the order of the types does not matter in an array */
let scooters = ["Rizta", "Konark", 450];
scooters[0] = 100;
scooters.push("450x");
scooters.push(500);
let arrMixedTypes = ["AI", 2001, true];
/* A subset type can be assigned to a superset type, but the reverse is not true  */
arrMixedTypes = scooters;
// scooters = mixeddArr // throws error
/* If we do not specify a type during intialization of a variable in TypeScript,
 * by default the type will be any[] */
let test = [];
test.push(0);
test.push("Hi");
/* Tuples */
let groceryList;
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
export {};
//# sourceMappingURL=script.js.map
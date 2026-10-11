// partials
let xCoordinate = {
    x: 10,
};
console.log(xCoordinate.x); // 10
console.log(xCoordinate.y); // undefined
let myCar = {
    make: "Ford",
    model: "Mustang",
    mileage: 12000
};
// Record
const nameAgeMap = {
    "Alice": 23,
    "Bob": 27,
};
console.log(nameAgeMap["Alice"]); // 23
// remove both `age` & `location` keys
const bob = {
    name: "Bob",
    height: 4.7,
    // age: 27 // error
    // location: "New York", // error
};
const joe = {
    name: "Joe",
    // height: 4.8, // error
    // age: 28, // error
    // location: "Florida" // error
};
// a string cannot be used here since Exclude removed it from the type.
const numVal = 3;
const boolVal = true;
// return type will be `{x: number, y: number;}`
const point = {
    x: 20,
    y: 30
};
const cartesianCoordinates = {
    x: 90,
    y: 89
};
const emp1 = {
    empId: "EMP001",
    name: "Sharan",
    email: "sharan@example.com"
};
export {};
// emp1.email = "sharan@yahoo.com"; // error
//# sourceMappingURL=main.js.map
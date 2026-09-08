/* Defining a Type Alias */

type StringOrNumber = string | number;

type UserId = StringOrNumber; // assigning one Type Alias to other

type ArrayOfStringOrNumber = (string | number)[];

type TwoDimensionalCoordinate = [x: number, y: number]; // tuple
let pointA: TwoDimensionalCoordinate = [1, 2];

type Employee = {
    firstName: string,
    lastName?: string,
    age: number,
    dob: Date,
    employeeId: UserId, // using the custom type alias we created
    projectCodes: ArrayOfStringOrNumber
}

// interface ArrStrNum = ArrayOfStingOrNumbers; // this will throw an error

interface IEmployee {
    firstName: string,
    lastName?: string,
    age: number,
    dob: Date,
    employeeId: UserId, // using the custom type alias we created
    projectCodes: ArrayOfStringOrNumber
}

/* Literal Types */

/* Inline Literals Types */
let provider: "google" | "yahoo" | "facebook";
provider = "google";
provider = "yahoo";
// provider = "twitter"; // throws error

let statusCode: 200 | 300 | 400 | 500 ;
statusCode = 200;
statusCode = 400;
// statusCode = 600; // throws error

// Named Literal Type, easy to reuse
type CardSuit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
let cardA: CardSuit = "Hearts"; // Valid
let cardB: CardSuit = "Diamonds";



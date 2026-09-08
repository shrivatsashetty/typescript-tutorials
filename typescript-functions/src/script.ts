/* Typescript Functions */

// the below function returns a type number
const add = (a: number, b: number): number => {
    return a + b;
}

// the below function returns nothing (void)
const logMessage = (message: any): void => {
    console.log(message);
}

logMessage("Hi"); // Hi
logMessage(add(2, 3)); // 5

/* Creating a Type Annotation for Functions,
 * We specify the function signature,
 * types of the parameters and the type for return value  */
type MathFunction = (a: number, b: number) => number;

/* We can also use an Interface instead of a type alias for functions */
// interface MathFunction {
//     (a: number, b: number): number
// }

let subtract: MathFunction = function (a, b) {
    return a - b;
}

let multiply: MathFunction = (a, b) => a * b;

logMessage(subtract(3, 2)); // 1
logMessage(multiply(2, 3)); // 6

/* Optional & Default Parameters  */

// functions with an optional parameter, requires type guard
const sum = (a: number, b: number = 0, c?: number): number => { 
    // type guard
    if(c === undefined) {
        return a + b;
    }
    return a + b + c;
}

// all parameters present
logMessage(sum(4, 8, 12)); // 24


// missing 3rd parameter, type guard will handle this
logMessage(sum(5, 6)); // 11

// missing 2nd parameter, default parameter will handle this
logMessage(sum(3, undefined, 9)); // 12

// missing second & third parameter
logMessage(sum(4)); // 4

/* Rest Parameters */
const total = (a: number, ...nums: number[]): number => {
    // console.log(typeof nums); // object
    return a + nums.reduce((previous, current) => previous + current);
}

/* The parameters 3, 5, 7 will be gathered by the rest operator 
 * and passed as a single array/object to the `total` function */
logMessage(total(3, 5, 7, 9)); // 24

/* The `never` type */
const throwError = (errMessage: string): never => {
    throw new Error(errMessage);
}

/* Funcitons containing an infinite loop will have `never` as return type */
// const infiniteLoop = (): never => {
//     let i: number = 1
//     while(true) {
//         i++;
//         /* uncommenting the below line will change the return type of the fucntion to void
//          * since it terminates the infinite loop  */
//         // if(i > 20) break;
//     }
// }
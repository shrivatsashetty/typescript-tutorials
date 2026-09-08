# Typescript Aliases

## Type Aliases
Are used to create a custom type in Typescript. 

```ts
/* Defining a Type Alias */

type StringOrNumber = string | number;

type UserId = StringOrNumber; // assigning one Type Alias to other

type ArrayOfStringOrNumber = (string | number)[];

type Employee  = {
    firstName: string,
    lastName?: string,
    age: number,
    dob: Date,
    employeeId: UserId, // using the custom type alias we created
    projectCodes: ArrayOfStringOrNumber
}
```

## Types vs Interfaces

In TypeScript, both interface and type (type alias) are used to define the shape of an object or contract, but the core difference is that type can define any kind of type (including primitives, unions, and intersections), whereas interface is strictly limited to naming object shapes and supports declaration merging

```ts
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
```

## Literal Types

Literal types in TypeScript allow you to specify exact values that variables can hold, providing more precision than broader types like string or number.

Allowed Literal Types include:
* String Literals: Exact string values like "success" | "error"
* Numeric Literals: Specific numbers like 1 | 2 | 3
* Boolean Literals: Either true or false
* Template Literal Types: String literal types built using template string syntax

Literal Types are further divided into 
1. Named Literal Types 
    ```ts
    /* Inline Literals Types */

    let statusCode: 200 | 300 | 400 | 500 ;
    statusCode = 200;
    statusCode = 400;
    // statusCode = 600; // throws error
    ```

    Here we specify that the variable `statusCode` can only hold specific values.

2. Inline Literal Types
    In this case, we make a type of the literal variable and reuse it across program.
    ```ts
    // Named Literal Type, easy to reuse
    type CardSuit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
    let cardA: CardSuit = "Hearts"; // Valid
    let cardB: CardSuit = "Diamonds";
    ```
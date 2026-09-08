# Typescript Functions

## Type Annotations for Functions

In typescript we usually specify type annotations for functions parameters and return type.

```ts
const add = (a: number, b: number): number => {
    return a + b;
}
```

Specifying type annotation for return type of a function is not mandatory as Typescript can infer it from the type of parameters and retrun statement. Nevertheless, it's better to do so.

```ts 
// type annotation for retun type is auto infered
const add = (a: number, b: number) => {
    return a + b;
}
```

If a function does not return anything but does some work, the retrun type is considered to be `void`

```ts
// the below function returns nothing (void)
const logMessage = (message: any): void => {
    console.log(message);
}

logMessage("Hi"); // Hi
```

We can create an explicit type annotation for functions as follows:

* We specify the function signature,
* Types of the parameters
* Type for return value

```ts
type MathFunction = (a: number, b: number) => number;

let subtract: MathFunction = function (a, b) {
    return a - b;
}

let multiply: MathFunction = (a, b) => a * b;

logMessage(subtract(3, 2)); // 1
logMessage(multiply(2, 3)); // 6
```

We can also use an Interface instead of a type alias for functions. Although it's not used much.
```ts
interface MathFunction {
    (a: number, b: number): number
}
```

## Optional & Default Parameters

In TypeScript, all function parameters are strictly required by default. To make a function more flexible, you can use optional parameters (which allow a value to be omitted, evaluating to undefined) or default parameters (which automatically provide a fallback value if omitted).

| **Feature** | **Optional Parameter (`?`)** | **Default Parameter (`=`)** |
| --- | --- | --- |
| **Syntax** | `param?: type` | `param: type = value` |
| **Omitted Value** | `undefined` | Uses the provided default value |
| **Position** | **Must** be placed after required parameters. | Can be placed anywhere (but best at the end). |
| **Type Definition** | Automatically appends `\|undefined` to the type. | Infer type from default value or explicit type. |

```ts
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

```

## Using the Rest Operator

rest operator (...) allows you to collect multiple values and condense them into a single entity, such as an array or an object. Its primary purpose is to handle an indefinite or variable number of arguments or elements flexibly while maintaining strict type safety.

```ts
/* Rest Parameters */
const total = (a: number, ...nums: number[]): number => {
    // console.log(typeof nums); // object
    return a + nums.reduce((previous, current) => previous + current);
}

/* The parameters 3, 5, 7 will be gathered by the rest operator 
 * and passed as a single array/object to the `total` function */
logMessage(total(3, 5, 7, 9)); // 24
```

## The `never` type

The `never` type is return type of functions that explicitly throw errors:

```ts
const throwError = (errMessage: string): never => {
    throw new Error(errMessage);
}
```

Also a function containing an infinite loop will have a return type of `never` 

```ts
const infiniteLoop = (): never => {
    let i: number = 1
    while(true) {
        i++;
        /* uncommenting the below line will change the return type of the fucntion to void
         * since it terminates the infinite loop  */
        // if(i > 20) break;
    }
}
```

# TS Utiliy Types Examples

## Partials
Partial changes all the properties in an object to be optional.

```ts 
interface Point {
    x: number;
    y: number;
}

let xCoordinate: Partial<Point> = {
    x: 10,
}

console.log(xCoordinate.x); // 10
console.log(xCoordinate.y); // undefined
```

## Required

Required changes all the properties in an object to be required.

```ts 
interface Car {
    make: string;
    model: string;
    mileage?: number; // optional property
}

let myCar: Required<Car> = {
    make: "Ford",
    model: "Mustang",
    mileage: 12000
}
```

## Record
Record is a shortcut to defining an object type with a specific key type and value type.
Record<string, number> is equivalent to { [key: string]: number }
```ts
const nameAgeMap: Record<string, number> = {
    "Alice": 23,
    "Bob": 27,
}

console.log(nameAgeMap["Alice"]); // 23
```

`Record<string, number>` is equivalent to `{ [key: string]: number }`

## Omit
Omit removes keys from an object type.

```ts
interface Person {
    name: string;
    age: number;
    height: number
    location?: string; 
}

// remove both `age` & `location` keys
const bob: Omit<Person, "age" | "location"> = {
    name: "Bob",
    height: 4.7,
    // age: 27 // error
    // location: "New York", // error
}
```

## Pick
Pick removes all but the specified keys from an object type.

```ts
interface Person {
    name: string;
    age: number;
    location?: string;
}

const joe: Pick<Person, "name"> = {
    name: "Joe",
    // height: 4.8, // error
    // age: 28, // error
    // location: "Florida" // error
}
```

## Exclude
Exclude removes the specified type from types from a union type.

```ts
type StrNumBool = string | number | boolean;

type NumBool = Exclude<StrNumBool, string>;

// a string cannot be used here since Exclude removed it from the type.
const numVal: NumBool =  3;
const boolVal: NumBool =  true;
```

## ReturnType
ReturnType extracts the return type of a function type.

```ts
type PointGenerator = () => {x: number, y: number;};

// return type will be `{x: number, y: number;}`
const point: ReturnType<PointGenerator> = {
    x: 20,
    y: 30
}
```

## Parameters
Parameters extracts the parameter types of a function type as an array.

```ts 
type PointPrinter = (point: {x: number, y: number}) => void;

type Coordinates = Parameters<PointPrinter>[0];

const cartesianCoordinates: Coordinates = {
    x: 90,
    y: 89
}
```

## Readonly
Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

```ts
interface Employee {
    empId: string;
    name: string;
    email: string;
    age?: number; // optional
    experience?: number; // optional
}

const emp1: Readonly<Employee> = {
    empId: "EMP001",
    name: "Sharan",
    email: "sharan@example.com"
}
```

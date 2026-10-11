
// partials

interface Point {
    x: number;
    y: number;
}

let xCoordinate: Partial<Point> = {
    x: 10,
}

console.log(xCoordinate.x); // 10
console.log(xCoordinate.y); // undefined

// Required

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

// Record

const nameAgeMap: Record<string, number> = {
    "Alice": 23,
    "Bob": 27,
}

console.log(nameAgeMap["Alice"]); // 23


// Omit

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

// Pick

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

// Exclude

type StrNumBool = string | number | boolean;

type NumBool = Exclude<StrNumBool, string>;

// a string cannot be used here since Exclude removed it from the type.
const numVal: NumBool =  3;
const boolVal: NumBool =  true;

// ReturnType

type PointGenerator = () => {x: number, y: number;};

// return type will be `{x: number, y: number;}`
const point: ReturnType<PointGenerator> = {
    x: 20,
    y: 30
}

// Parameters
type PointPrinter = (point: {x: number, y: number}) => void;

type Coordinates = Parameters<PointPrinter>[0];

const cartesianCoordinates: Coordinates = {
    x: 90,
    y: 89
}


// Readonly

interface Employee {
    empId: string;
    name: string;
    email: string;
    age?: number; // optional field
    experience?: number; // optional field
}

const emp1: Readonly<Employee> = {
    empId: "EMP001",
    name: "Sharan",
    email: "sharan@example.com"
}

// emp1.email = "sharan@yahoo.com"; // error


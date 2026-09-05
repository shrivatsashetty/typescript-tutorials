
/* typescript automatically gets to know the type annotations of this object using inference */
let address = {
    city: "Bangalore",
    pin: 560013,
    isAddressParmanent: false
}
console.log(address);
console.log(typeof address);

address.pin = 550123;
// address.pin = "550123" // throws error

/* Inline Declaration of types */
const car: { brand: string, model: string, year: number } = {
    brand: "Ford",
    model: "Ecosport",
    year: 2009
};

console.log(car.model);
// car.engine = "V-8" // throws error, property not defined for object car


type Person = {
    firsName: string,
    lastName?: string, // optional property
    age: number,
    dob: Date
}

let personA: Person = {
    firsName: "Vijay",
    lastName: "Kumar", // optional property
    age: 31,
    dob: new Date("1995-12-17")
}

// throws error: Missing property `age` for for type Person
// let personB: Person = {
//     firsName: "Mahesh",,
//     dob: new Date("1995-12-17")
// }

/* A person object with different shape */
let personC = {
    firstname: "Sharath",
    age: 25
    // no dob property
}

// personC = personA // throws error: incompatible object assignment

let personD: Person;
// personD.maritalStatus = "Unmarried" // property does not exist in the defined type

const greetPerson = (person: Person) => {
    return `Hello ${person.firsName.toUpperCase()} ${person.lastName?.toUpperCase()}`
}


/* Enums */ 
/* Enum values are indexed by default */
enum Status {
    STARTED,
    ONGOING,
    FINISHED
}
console.log(Status.STARTED) // 0
console.log(Status.ONGOING) // 1
console.log(Status.FINISHED) // 2

// string enums
enum TrafficLights {
    RED = "Red",
    YELLOW = "Yellow",
    GREEN = "Green"
}
console.log(TrafficLights.GREEN); // Green

// Numeric Enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200
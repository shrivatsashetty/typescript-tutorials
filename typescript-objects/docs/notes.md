# Typescript Objects

## Object Type

The shape of an object is automatically infered by the value assigned

```typescript
/* typescript automatically gets to know the type annotations of this object using inference */
let address = {
    city: "Bangalore",
    pin: 560013,
    isAddressParmanent: false
}

console.log(typeof address); // Object
```

You can specify the type annotations by creating a type object.

```typescript
type Person = {
    firsName: string,
    lastName?: string, // optional property
    age: number,
    dob: Date
}

let personA: Person = {
    firsName: "Vijay",
    lastName: "Kumar", // optional property, we can omit this
    age: 31,
    dob: new Date("1995-12-17")
}
```

Usage in functions

```typescript
const greetPerson = (person: Person) => {
    return `Hello ${person.firsName.toUpperCase()} ${person.lastName?.toUpperCase()}`
}
```

## Enums

An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors **string** and **numeric**.

```ts
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
```




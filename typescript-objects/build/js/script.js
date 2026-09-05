/* typescript automatically gets to know the type annotations of this object using inference */
let address = {
    city: "Bangalore",
    pin: 560013,
    isAddressParmanent: false
};
console.log(address);
console.log(typeof address);
address.pin = 550123;
// address.pin = "550123" // throws error
/* Inline Declaration of types */
const car = {
    brand: "Ford",
    model: "Ecosport",
    year: 2009
};
console.log(car.model);
let personA = {
    firsName: "Vijay",
    lastName: "Kumar", // optional property
    age: 31,
    dob: new Date("1995-12-17")
};
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
};
// personC = personA // throws error: incompatible object assignment
let personD;
// personD.maritalStatus = "Unmarried" // property does not exist in the defined type
const greetPerson = (person) => {
    return `Hello ${person.firsName.toUpperCase()} ${person.lastName?.toUpperCase()}`;
};
/* Enums */
/* Enum values are indexed by default */
var Status;
(function (Status) {
    Status[Status["STARTED"] = 0] = "STARTED";
    Status[Status["ONGOING"] = 1] = "ONGOING";
    Status[Status["FINISHED"] = 2] = "FINISHED";
})(Status || (Status = {}));
console.log(Status.STARTED); // 0
console.log(Status.ONGOING); // 1
console.log(Status.FINISHED); // 2
// string enums
var TrafficLights;
(function (TrafficLights) {
    TrafficLights["RED"] = "Red";
    TrafficLights["YELLOW"] = "Yellow";
    TrafficLights["GREEN"] = "Green";
})(TrafficLights || (TrafficLights = {}));
console.log(TrafficLights.GREEN); // Green
// Numeric Enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200
export {};
//# sourceMappingURL=script.js.map
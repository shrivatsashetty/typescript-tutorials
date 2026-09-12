import Developer from "./Developer.js";
import WebDeveloper from "./WebDeveloper.js";
import type IAddress from "./IAddress.js";

let address: IAddress = {
    city: "Bengaluru",
    pin: 560012,
    location: { buildingName: "Keerthi Elite", streetNumber: 12 },
};

let languages: string[] = ["HTML 5", "TS", "JS"];

// we do not pass languages since it's optional parameter
const dev1 = new Developer("Shri", 25, address);

console.log(dev1.getAge()); // 25

const dev2 = new WebDeveloper("Mac M1", "Saharan", 30, address, languages);

console.log(dev2.getAge()); // 30
console.log(dev2.getComputer()); // Mac M1
console.log(dev2.getAddress()); // {city: 'Bengaluru', pin: 560012, location: {…}}



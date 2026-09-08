
type TypeString = string; // string Type

type TypeStringOrNumber = string | number; // Union Type

type TypeStringLiteral = "Hello"; // Literal Type

let a: TypeString = "Hi";
console.log(a); // Hi

let b = a as TypeStringOrNumber; // Asserting or Casting the type of variable `a` to a less specific type
console.log(b); // Hi

let c = a as TypeStringLiteral // Asserting or Casting the type of variable `a` to a more specific type
console.log(c); // Hi


/* Typecasting using Angular Brackets, can't be used in JSX files */
let d = <TypeString>"Bunjor";
console.log(d);

let e = <string | number>21;
console.log(e);

let f: TypeStringLiteral ;
f = "Hello";
// f = "Bunjor"; // throws error
console.log(f);


const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}

let myVal: string = addOrConcat(2, 3, "concat") as string;
console.log(myVal); // 23
console.log(typeof myVal); // string

let nextVal: number = addOrConcat(2, 3, "concat") as number;
console.log(nextVal); // 23
console.log(typeof nextVal); // string

const img = document.querySelector("img"); // HTMLImageElement | null
console.log(typeof img); // Object

const myElement = document.querySelector("#my-element") ; //  Element | null
(myElement as HTMLImageElement).src = "https://dummy-image.net";

console.log(typeof myElement);


const myHtmlElement = document.getElementById("my-element"); // HTMLElement | null
console.log(typeof myHtmlElement); 


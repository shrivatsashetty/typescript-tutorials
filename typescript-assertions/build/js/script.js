let a = "Hi";
console.log(a); // Hi
let b = a; // Asserting or Casting the type of variable `a` to a less specific type
console.log(b); // Hi
let c = a; // Asserting or Casting the type of variable `a` to a more specific type
console.log(c); // Hi
/* Typecasting using Angular Brackets, can't be used in JSX files */
let d = "Bunjor";
console.log(d);
let e = 21;
console.log(e);
let f;
f = "Hello";
// f = "Bunjor"; // throws error
console.log(f);
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
console.log(myVal); // 23
console.log(typeof myVal); // string
let nextVal = addOrConcat(2, 3, "concat");
console.log(nextVal); // 23
console.log(typeof nextVal); // string
const img = document.querySelector("img"); // HTMLImageElement | null
console.log(typeof img); // Object
const myElement = document.querySelector("#my-element"); //  Element | null
myElement.src = "https://dummy-image.net";
console.log(typeof myElement);
const myHtmlElement = document.getElementById("my-element"); // HTMLElement | null
console.log(typeof myHtmlElement);
export {};
//# sourceMappingURL=script.js.map
/* A function which returns whatever is passed
 * Need to be a generic function in order to work properly */
const getIdentity = (param) => {
    return param;
};
console.log(getIdentity("Hello")); // "Hello"
console.log(getIdentity(1)); // 1
/* A Generic Function to work with arrays */
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [5, 2, 3];
const firstNum = getFirstElement(numbers); // Type: number
console.log(firstNum); // 1
const words = ["Namste", "Hello", "Bunjor"];
const firstWord = getFirstElement(words); // Type: string
console.log(firstWord); // "hello"
/* Generics that work with more than one arbitrary types denoted as K & V
 * Returns a tuple of type [K, V] */
function pair(key, value) {
    return [key, value];
}
console.log(pair("id", 123));
/* A Generic function with Type Constraints */
/* This function works with arrays, strings, and objects that have a `length` property
 * but not with numbers: */
function getLength(enumerable) {
    return enumerable.length;
}
let lenArr = getLength([2, 5, 0]);
console.log(lenArr);
let lenStr = getLength("Aeroplane");
console.log(lenStr);
const box1 = { content: 42 };
const box2 = { content: "hello" };
console.log(`Contents of Box 1: ${box1.content}`); // Contents of Box 1: 42
console.log(`Contents of Box 2: ${box2.content}`); // Contents of Box 2: hello
const scoreCard1 = {
    subjectCodes: ["ENG", "MAT", "PHY", "CS"],
    scores: [90, 88, 88, 91],
};
console.log(scoreCard1.subjectCodes); // ['ENG', 'MAT', 'PHY', 'CS']
console.log(scoreCard1.scores); // [90, 88, 88, 91]
/* Use of Generics with Classes */
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    /* A public property to access Stack items */
    getItems() {
        return this.items;
    }
}
const stackNum = new Stack();
stackNum.push(21);
stackNum.push(2);
console.log(`Stack of Num: ${stackNum.getItems()}`);
console.log(`Poped Stack Item ${stackNum.pop()}`);
console.log(`Stack After Pop: ${stackNum.getItems()}`);
const stringStack = new Stack();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.pop()); // "b"
export {};
//# sourceMappingURL=main.js.map
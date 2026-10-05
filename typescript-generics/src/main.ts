/* A function which returns whatever is passed
 * Need to be a generic function in order to work properly */
const getIdentity = <T>(param: T): T => {
    return param;
}

console.log(getIdentity("Hello")); // "Hello"
console.log(getIdentity(1)); // 1

/* A Generic Function to work with arrays */
function getFirstElement<T>(arr: T[]): T | undefined {
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
function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

console.log(pair("id", 123));

/* A Generic function with Type Constraints */

/* This function works with arrays, strings, and objects that have a `length` property 
 * but not with numbers: */
function getLength<T extends {length: number}>(enumerable: T): number {
    return enumerable.length;
}

let lenArr: number = getLength([2, 5, 0]); 
console.log(lenArr);

let lenStr: number = getLength("Aeroplane");
console.log(lenStr);

// // Errro: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
// let lenNum: number  = getLength(4); 


/* Use of Generics in Interfaces */

interface Box<T> {
  content: T;
}

const box1: Box<number> = { content: 42 };
const box2: Box<string> = { content: "hello" };

console.log(`Contents of Box 1: ${box1.content}`); // Contents of Box 1: 42
console.log(`Contents of Box 2: ${box2.content}`); // Contents of Box 2: hello

type NumberOrString = number | string;

/* An interface which can work with two different varying types */
interface ScoreCard<T1 extends NumberOrString, T2 extends NumberOrString> {
    // `subjectCodes` can sometimes be numbers or string
    subjectCodes: T1[];
    // `scores` can sometimes be numbers(90, 80 etc) or string (A+, B+ etc) 
    scores: T2[];
}

const scoreCard1: ScoreCard<string, number> = {
    subjectCodes: ["ENG", "MAT", "PHY", "CS"],
    scores: [90, 88, 88, 91],
}

console.log(scoreCard1.subjectCodes); // ['ENG', 'MAT', 'PHY', 'CS']
console.log(scoreCard1.scores); // [90, 88, 88, 91]


/* Use of Generics with Classes */

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    /* A public property to access Stack items */
    public getItems() {
        return this.items;
    }
}

const stackNum: Stack<number> = new Stack<number>();

stackNum.push(21);
stackNum.push(2);
console.log(`Stack of Num: ${stackNum.getItems()}`);
console.log(`Poped Stack Item ${stackNum.pop()}`);
console.log(`Stack After Pop: ${stackNum.getItems()}`);

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.pop()); // "b"

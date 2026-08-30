let myname: string = "Shri";
myname = "shrivatsa";
// myname = 3; // throws error
console.log("Hello", myname);

let age: number = 25;
age = 26;

let isLoading: boolean = true;
isLoading = false;


/* Union Type: explicitly specify what data types the variable can hold
 * Used in the following scenarios:
 * Say suppose we have an API endpoint which returns a Post Id as string 
 * but we have to convert the Post Id to number to work with it.  */
let postId: string | number | boolean;

postId = "113";

postId = 113;
// album = true; // throws error

postId = false;

let isActive: boolean | number;
isActive = 0;
isActive = true;


/* Type `any` let's you store any type of data in a variable,
 * use only when not sure which type of data will be received */
let address: any;

address = "Bengaluru";

address = 560023;

address = {
    albumName: "Kannada Hits",
    languageCode: 2
}

/* specifying types for functions, we can specify the types for parameters & return type */
// performs addition of two numbers
const sum =  (a: number, b: number): number => {
    return a + b; 
}

// performs concatenation of a number with a string
const concatenate =  (a: number, b: string): string => {
    return a + b; 
}
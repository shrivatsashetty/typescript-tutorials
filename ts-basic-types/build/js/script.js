let myname = "Shri";
myname = "shrivatsa";
// myname = 3; // throws error
console.log("Hello", myname);
let age = 25;
age = 26;
let isLoading = true;
isLoading = false;
/* Union Type: explicitly specify what data types the variable can hold
 * Used in the following scenarios:
 * Say suppose we have an API endpoint which returns a Post Id as string
 * but we have to convert the Post Id to number to work with it.  */
let postId;
postId = "113";
postId = 113;
// album = true; // throws error
postId = false;
let isActive;
isActive = 0;
isActive = true;
/* Type `any` let's you store any type of data in a variable,
 * use only when not sure which type of data will be received */
let address;
address = "Bengaluru";
address = 560023;
address = {
    albumName: "Kannada Hits",
    languageCode: 2
};
/* specifying types for functions, we can specify the types for parameters & return type */
// performs addition of two numbers
const sum = (a, b) => {
    return a + b;
};
// performs concatenation of a number with a string
const concatenate = (a, b) => {
    return a + b;
};
export {};
//# sourceMappingURL=script.js.map
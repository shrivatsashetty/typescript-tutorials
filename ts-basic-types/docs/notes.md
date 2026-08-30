# Basic Types


## Strong Vs Weak Typing

- TypeScript is a Strongly Typed Language
- JavaScript is a Looseley Typed Language(aka Weakly Typed)

> [!NOTE]
> - **Static Typing** & **Dynamic Typing** is not same as **Loosely Typed** & **Strongly Typed**.
> - A programming language that is strongly typed can be either statically or dynamically typed.

- TypeScript is a **statically** typed language. This means the types are checked at **compile** time. 
- JavaScript is a **dynamically** typed language. This means the types are checked at **run** time. 

## Benefits of Typescript

- Self-Documenting Code
- Catch errors early during the development phase
- Great for teams

## Basic Types in Typescript
1. **number**
   
   * Stores all type of numbers including floating point numbers, whole numbers, integers etc.

   * Example:
        ```ts
            let age: number = 25;
            age = 26;
        ```

2. **boolean**
   
   * Stores either `true` or `false`

   * Example:
        ```ts
        let isLoading: boolean = true;
        isLoading = false;

        ```

3. **string**
   
   * Stores array of characters
   * Example:
        ```ts 
        let myname: string = "Shri";
        myname = "shrivatsa";
        // myname = 3; // throws error
        ```

4. **any**
   
   * Can store any type of data
   * Use sparingly and only when not sure what type of data is returned
   * Examples:
        ```ts 
        let address: any;

        address = "Bengaluru";

        address = 560023;

        address = {
            albumName: "Kannada Hits",
            languageCode: 2
        }
        ```
  
5. **Union Data Type**
   
   * Explicitly specify what type of data can a variable hold.
   * A variable of union type can hold more than one type of data.
   * Example:
        ```ts
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
        ```

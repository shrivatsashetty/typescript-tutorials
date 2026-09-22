# Typescript Classes

## Class
A Typescript class is a template for creating Typescript objects.

### Example:

```ts
import type IAddress  from "./IAddress.js";

export default class Developer {

    /* If visibility modifiers not specified in constructor parameters, 
     * then we need to define the properties explicitly in the body of the class */
    // name: string;
    // age: number;
    // languages: string[];

    constructor(
        // public property can be accessed from any where within or outside of a class
        public readonly name: string, 
        
        // private property can only be accessed within the class
        private age: number = 25, 

        // protected property can be accessed within the class and it's derived classes
        protected address: IAddress,

        /* an optional parameter, must always come at last */
        public languages: string[] = ["Java", "TS", "JS"], 
    ) {
        this.name = name;
        this.age = age;
        this.languages = languages,
        this.address = address
    }

    public getAge(): number {
        return this.age;
    }
}
```

## Access Modifiers
There are three main visibility modifiers in TypeScript.

* `public` - (default) allows access to the class member from anywhere
* `private` - only allows access to the class member from within the class
* `protected` - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

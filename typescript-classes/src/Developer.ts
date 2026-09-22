import type IAddress  from "./IAddress.js";

export default class Developer {

    /* If properties are not assigned in the constructor
     * then we need to define the properties explicitly in the body of the class */
    // name: string;
    // private age: number;
    // languages: string[];

    constructor(
        // public property can be accessed from any where within or outside of a class
        public readonly name: string, 
        
        // private property can only be accessed within the class
        private age: number, 

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
export default class Developer {
    name;
    age;
    address;
    languages;
    /* If visibility modifiers not specified in constructor parameters,
     * then we need to define the properties explicitly in the body of the class */
    // name: string;
    // age: number;
    // languages: string[];
    constructor(
    // public property can be accessed from any where within or outside of a class
    name, 
    // private property can only be accessed within the class
    age = 25, 
    // protected property can be accessed within the class and it's derived classes
    address, 
    /* an optional parameter, must always come at last */
    languages = ["Java", "TS", "JS"]) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.languages = languages;
        this.name = name;
        this.age = age;
        this.languages = languages,
            this.address = address;
    }
    getAge() {
        return this.age;
    }
}
//# sourceMappingURL=Developer.js.map
import Developer from "./Developer.js";
import type IAddress  from "./IAddress.js";

export default class WebDeveloper extends Developer {

    constructor(
        private computer: string,
        name: string,
        age: number,
        address: IAddress,
        languages: string[]
    
    ) {
        /* Calling the constructor of the parent class before intialization of properties */  
        super(name, age, address, languages);

        this.computer = computer;

    }

    public getComputer(): string {
        return this.computer;
    }

    public getAddress(): IAddress {
        return this.address;
    }

}
import Developer from "./Developer.js";
export default class WebDeveloper extends Developer {
    computer;
    constructor(computer, name, age, address, languages) {
        /* Calling the constructor of the parent class before intialization of properties */
        super(name, age, address, languages);
        this.computer = computer;
        this.computer = computer;
    }
    getComputer() {
        return this.computer;
    }
    getAddress() {
        return this.address;
    }
}
//# sourceMappingURL=WebDeveloper.js.map
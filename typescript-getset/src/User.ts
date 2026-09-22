export default class User {
    // Private backing property to store the actual data
    private _age: number = 0;

    // Getter: Read access
    get age(): number {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            throw new Error("Age cannote be negative");
        }
        this._age = value;
    }
}
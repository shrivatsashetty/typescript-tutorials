export default class User {
    // Private backing property to store the actual data
    _age = 0;
    // Getter: Read access
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannote be negative");
        }
        this._age = value;
    }
}
//# sourceMappingURL=User.js.map
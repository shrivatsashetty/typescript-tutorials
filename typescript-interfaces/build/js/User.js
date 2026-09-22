export default class User {
    name;
    /* a static property belongs to class not any of it's objects */
    static count = 0;
    static getCount() {
        return User.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++User.count;
    }
}
//# sourceMappingURL=User.js.map
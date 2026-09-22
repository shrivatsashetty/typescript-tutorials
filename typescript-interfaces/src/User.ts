
export default class User {
    /* a static property belongs to class not any of it's objects */
    static count: number = 0;

    static getCount(): number {
        return User.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++User.count;
    }
}
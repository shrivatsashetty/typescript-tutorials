export default class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    getName() {
        return this.name;
    }
    getInstrument() {
        return this.instrument;
    }
    /* Implementation for the method of the parent class */
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
//# sourceMappingURL=Guitarist.js.map
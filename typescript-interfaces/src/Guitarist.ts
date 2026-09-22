import type Musician from "./Musician.js";

export default class Guitarist implements Musician {

    name: string;
    instrument: string;

    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }

    public getName(): string {
        return this.name;
    }
    
    public getInstrument(): string {
        return this.instrument;
    }

    /* Implementation for the method of the parent class */
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }

}

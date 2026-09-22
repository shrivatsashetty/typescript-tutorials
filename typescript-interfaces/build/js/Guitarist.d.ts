import type Musician from "./Musician.js";
export default class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string);
    getName(): string;
    getInstrument(): string;
    play(action: string): string;
}
//# sourceMappingURL=Guitarist.d.ts.map
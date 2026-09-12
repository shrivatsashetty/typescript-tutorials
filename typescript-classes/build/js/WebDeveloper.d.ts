import Developer from "./Developer.js";
import type IAddress from "./IAddress.js";
export default class WebDeveloper extends Developer {
    private computer;
    constructor(computer: string, name: string, age: number, address: IAddress, languages: string[]);
    getComputer(): string;
    getAddress(): IAddress;
}
//# sourceMappingURL=WebDeveloper.d.ts.map
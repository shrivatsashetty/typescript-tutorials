import type IAddress from "./IAddress.js";
export default class Developer {
    readonly name: string;
    private age;
    protected address: IAddress;
    languages: string[];
    constructor(name: string, age: number | undefined, address: IAddress, languages?: string[]);
    getAge(): number;
}
//# sourceMappingURL=Developer.d.ts.map
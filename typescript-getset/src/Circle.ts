export default class Circle {
    constructor(public radius: number) {
        // this.radius = radius;
    }

    /* Compute values on the fly */
    get area(): number {
        return Math.PI * this.radius ** 2;
    }
}


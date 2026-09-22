export default class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
        // this.radius = radius;
    }
    /* Compute values on the fly */
    get area() {
        return Math.PI * this.radius ** 2;
    }
}
//# sourceMappingURL=Circle.js.map

import User from "./User.js";
import Circle from "./Circle.js";

const user: User = new User();

user.age = 25;

console.log(user.age); // 25

/* Uncaught Error: Age cannote be negative */
// user.age = -5;


const myCircle: Circle = new Circle(5);

console.log(myCircle.area); // 78.53981633974483



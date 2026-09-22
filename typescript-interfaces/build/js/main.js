import Guitarist from "./Guitarist.js";
import User from "./User.js";
const page = new Guitarist("Jimmy", "Guitar");
console.log(page.play("strums"));
const jhon = new User("Jhon Balmer");
const matt = new User("Matt Henry");
const jane = new User("Jane Doe");
console.log(jhon.id); // 1
console.log(matt.id); // 2
console.log(jane.id); // 3
console.log(User.count); // 3
//# sourceMappingURL=main.js.map
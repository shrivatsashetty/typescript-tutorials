/* A utility function to set the property of an object */
function setProp(user, key, value) {
    user[key] = value;
}
function updateUser(originalUser, updatedUser) {
    for (const key in updatedUser) {
        const k = key; // "id" | "name" | "email" | "role"
        if (updatedUser[k] !== undefined) {
            /* In th below code snippet: `User[typeof k]`
             * which will be evaluates to: `User[keyof User]`
             * means: the type of every value in User.
             * returns the string: string | "admin" | "user" */
            setProp(originalUser, k, updatedUser[k]);
        }
    }
    return originalUser;
}
const user1 = {
    id: "USR1",
    name: "Shri",
    email: "shri@example.com",
    role: "user"
};
console.log(`User Before Update \n: ${JSON.stringify(user1)}`);
const updateUser1 = {
    email: "shri@yahoo.com",
    role: "admin"
};
// the function modifies the original User object
updateUser(user1, updateUser1);
console.log(`User After Update \n: ${JSON.stringify(user1)}`);
export {};
//# sourceMappingURL=main.js.map
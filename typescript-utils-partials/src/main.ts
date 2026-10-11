type User = {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
}

type UpdateUser = Partial<User>;

/* A utility function to set the property of an object */
function setProp<K extends keyof User>(user: User, key: K, value: User[K]) {
    user[key] = value;
}

function updateUser(originalUser: User, updatedUser: UpdateUser): User {
    
    for (const key in updatedUser) {

        const k = key as keyof User; // "id" | "name" | "email" | "role"

        if(updatedUser[k] !== undefined) {
            /* In th below code snippet: `User[typeof k]`
             * which will be evaluates to: `User[keyof User]`
             * means: the type of every value in User.
             * returns the string: string | "admin" | "user" */
            setProp(originalUser, k, updatedUser[k] as User[typeof k]);
        }
    }

    return originalUser;
}

const user1: User = {
    id: "USR1",
    name: "Shri",
    email: "shri@example.com",
    role: "user"
}

console.log(`User Before Update \n: ${JSON.stringify(user1)}`); // {"id":"USR1","name":"Shri","email":"shri@example.com","role":"user"}

const updateUser1: UpdateUser = {
    email: "shri@yahoo.com",
    role: "admin"
}

// the function modifies the original User object
updateUser(user1, updateUser1);

console.log(`User After Update \n: ${JSON.stringify(user1)}`); // {"id":"USR1","name":"Shri","email":"shri@yahoo.com","role":"admin"}


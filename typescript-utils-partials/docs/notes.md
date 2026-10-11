# Typescript Utility Types

## What are Utility Types ?

In plain JavaScript, you have utility functions (like Array.map or Object.assign) that take existing data and transform it into new data. In TypeScript, utility types do the exact same thing—except they operate on types instead of values. They take an existing type you've already defined and transform, extract, or mutate it to create a new type without you having to re-write it from scratch.

## Why we need them ?

Without utility types, you end up breaking the DRY (Don't Repeat Yourself) principle in your type definitions.

Imagine you have a User type for your database:

```ts
type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};
```

Now consider these real-world scenarios:

Creating a user: When a user signs up, the backend generates the id. The client shouldn't send an id.

Updating a profile: When a user updates their profile, all fields should be optional (maybe they only want to change their name).

Displaying a read-only view: You want to ensure no function accidental mutates the user object.

Without utility types, you'd have to manually copy-paste and rewrite three separate types:

```ts
// ❌ Duplicate code everywhere
type CreateUserInput = {
  name: string;
  email: string;
  age: number;
};
```

```ts
type UpdateUserInput = {
  name?: string;
  email?: string;
  age?: number;
};
```

With utility types, you derive them instantly from your original User type:

```ts
// ✅ Clean, maintainable, and synced with the original User type
type CreateUserInput = Omit<User, 'id'>;
type UpdateUserInput = Partial<User>;
type ReadonlyUser = Readonly<User>;
```

If you add a new field like `avatarUrl: string` to User tomorrow, all your derived types automatically update.

## Partials
`Partial<T>` takes an existing type `T` and makes all of its properties optional.
It wraps every property of your original type with a ? modifier behind the scenes.

```ts
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
```


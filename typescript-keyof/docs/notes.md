# Typescript `keyof` Operator

The `keyof` operator in TypeScript is the index type query operator. It takes an object type and produces a union of its property keys as literal string or number types.

**Example:**

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

// Equivalent to: type UserKeys = "id" | "name" | "email"
type UserKeys = keyof User;

let key: UserKeys;

key = "name";  // ✅ Valid
key = "email"; // ✅ Valid
key = "age";   // ❌ Error: Type '"age"' is not assignable to type 'UserKeys'.
```

## Use Case
The primary use case for keyof is to write type-safe functions that access properties of objects without hardcoding key names or using unsafe any types.

For example, let's consider the following type `Student` with the below defined properties:

```ts 
type Student =  {
    name: string;
    grade: number;
    scores?: number[];
}
```

Let's create a object `student1` of type `Student`

```ts
const student1: Student = {
    name: "Dough",
    grade: 3,
    scores: [91, 98],
}
```

Now, let's try to create a function that can access a given property from the a `Student` object:

```ts
function getStudentInfo(student: Student, property: string): void {
    console.log(student[property]);
}
```
The above function would immediately throw the following error:
> Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Student'. No index signature with a parameter of type 'string' was found on type 'Student'.

### **Explanation:**
TypeScript checks: "Can I use a `string` to index `Student`?" And `Student` has no index signature — it only has three explicitly named properties. Without an index signature, TypeScript doesn't know what type `student[arbitraryString]` should produce, so it refuses to let you index it that way. Hence the error.

### **Fix:**
1. Adding an Index Signature to the type:
    ```ts
    type Student = {
        [property: string]: string | number | number[] | undefined,
        name: string,
        grade: number,
        classes?: number[],
    }
    ```
    Now `student[property]` is valid because every possible string `property` resolves to `string | number | number[] | undefined`. This works, but it also means any string key is now technically "valid" on Student (even typos like `student.naem` won't throw an error), which weakens type safety a bit.

2. Cast `key` to `keyof Student` (most common fix):
    ```ts
    function getStudentInfo(student: Student, property: string) {
        console.log(student[property as keyof Student]);
    }
    ```
    Here you're telling TypeScript: "trust me, this key, `property` is actually one of Student's real keys." This is safe as long as you're sure no extra enumerable properties will show up on the object at runtime (true in almost all everyday cases). You can also make the code more cleaner by using the following syntax:

    ```ts
    // Equivalent to: type StudentKey = "name" | "grade" | "scores"
    type StudentKey = keyof Student;

    function logStudentProperty(student: Student, property: StudentKey): void {
        console.log(student[property]);
    }
    ```

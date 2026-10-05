# Typescript Generics

**References:**
* [Medium Article](https://medium.com/@ignatovich.dm/typescript-generics-a-simple-guide-with-practical-examples-ca3492eb821f)

Essentially Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Just as parameters allow a function to accept different values, Generics allow functions, classes, interfaces, and aliases to accept different types without losing type safety or falling back to any.

> [!NOTE]
> Generics are like variables for types.

## Use Case
1. **Reusability**

    Generics make your code reusable. Instead of writing the same function multiple times for different types, you can write it once and use it with any type.

2. **Type Safety**

    Generics ensure that your code is type-safe. You get the benefits of static typing without losing flexibility.

3. **Avoid `any` Type**
   
    Using any in TypeScript is like turning off type checking. Generics let you keep type safety while still being flexible.


## Syntax

```ts
function identity<T>(value: T): T {
  return value;
}
```

**Explanation**:

* `<T>` means “this function works with any type.”
* `value: T` means “the parameter has the type `T`.”
* `: T` means “this function returns a value of type `T`.”

So, TypeScript infers the type when we call the function:

**Example:**
```ts
/* A function which returns whatever is passed
 * Need to be a generic function in order to work properly */
const getIdentity = <T>(param: T): T => {
    return param;
}

console.log(getIdentity("Hello")); // "Hello"
console.log(getIdentity(1)); // 1
```

## Type Flow 
The type "flow" when using generics is reversed.
```ts
//                  ↓──────────(1)────────┐
function print<MessageType>(message: MessageType): MessageType {}
//    
```

> (1) The literal type of message is assigned as the type of MessageType generic; (2) The inferred MessageType generic type is used to annotate the return type of print().

Instead of saying "now the `message` is of type `MessageType`", the `MessageType` generic stores whichever literal type is passed as the `message` argument in a "variable" called `MessageType`.

## Generics With Constraints

```ts
function logLength<T extends { length: number }>(value: T): number {
    return value.length;
}
```
This function works with arrays, strings, and objects that have a length property but not with numbers:

```ts
logLength("hello"); // ✅ Works (string has length)
logLength([1, 2, 3]); // ✅ Works (array has length)
logLength({ length: 10 }); // ✅ Works (object has length)

// logLength(42); ❌ Error (number has no length)
```

## Generics in Interfaces

```ts
/* An interface which can work with two different varying types */
interface Box<T> {
  content: T;
}

const box1: Box<number> = { content: 42 };
const box2: Box<string> = { content: "hello" };

console.log(`Contents of Box 1: ${box1.content}`); // Contents of Box 1: 42
console.log(`Contents of Box 2: ${box2.content}`); // Contents of Box 2: hello
```

## Generics with Classes

Generics can also be applied to classes. For example, you can create a generic Stack class:

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Usage
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.pop()); // "b"
```
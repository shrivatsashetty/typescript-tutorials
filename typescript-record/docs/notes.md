# Typescript Records

The `Record<Keys, Type>` is a utility type in TypeScript that helps define objects with specific key-value pairs. It creates an object type where the property keys are of type Keys, and the values are of type Type. Here is the internal definition of the Record type:

```ts
type Record<K extends string | number | symbol, T> = { [P in K]: T; }
```

In practical terms, Record is often used to represent collections of data, such as API responses, configuration objects, or dictionaries. For example, `Record<string, number>` represents an object where all keys are strings and all values are numbers, while `Record<'id' | 'name' | 'age', string>` represents an object that must have exactly the properties id, name, and age, all with string values.

The primary benefit of using Record is type safety – TypeScript will verify that all required keys are present and that all values match their expected types, catching potential errors at compile time rather than runtime.

## Syntax

The basic syntax of Record is as follows:

```ts
Record<Keys, Type>
```

Here, Keys is a union of property names (often strings or numbers), and Type is the type of values associated with those keys.

## Example

```ts
type Actions = "read" | "write" | "execute";

type Role = Record<Actions, boolean>;

const admin: Role = {
    read: true,
    write: true,
    execute: true,
}

const user: Role = {
    read: true,
    write: true,
    execute: false,
}

const guest: Role = {
    read: true,
    write: false,
    execute: false,
}
```

This creates an object type with the exact keys 'admin', 'editor', and 'viewer', where each value is a boolean.

This makes Record particularly suitable when building mappings for things like configuration values or structured API responses that rely on predictable key-value patterns.

## Use Cases
The record structure makes code easier to reason about when working with fixed key-value maps. It's often used in situations like:

* Assigning roles to access rights.
* Mapping keys to component configurations.
* Creating typed dictionaries where all keys are known up front.
* Defining enums with associated data types.

Compared to using an index signature like `{ [key: string]: string }`, record is more explicit and avoids allowing unexpected keys.

## Nested Records 
A nested `Record` is simply a `Record` where the value type `V` is another `Record` type.

**Example:**
```ts
type BeverageType = "coffe" | "tea";

type ServingSize = "small" | "medium" | "large";

const priceChart: Record<BeverageType, Record<ServingSize, number>> = {
    coffe: {
        small: 8,
        medium: 12,
        large: 15
    },
    tea: {
        small: 6,
        medium: 10,
        large: 13
    }
}

// a function to get price of a beverage give the serving size
function getPrice(beverage: BeverageType, size: ServingSize ): number {
    return priceChart[beverage][size];
}

let cost = getPrice("coffe", "medium"); // cost of a medium size coffe
console.log(`Medium Coffe Costs ${cost} Rupees`); // Medium Coffe Costs 12 Rupees

```
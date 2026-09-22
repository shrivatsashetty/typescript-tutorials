# Typescript Getter & Setter

In TypeScript, `get` and `set` keywords define **getters** and **setters**—special methods that execute when you access or assign a property on an object. They allow you to intercept property reads and writes as if they were standard public fields, but execute custom logic behind the scenes.

**What Are They?**

* **Getter (`get`):** Intercepts reading a property value. Must return a value.
* **Setter (`set`):** Intercepts assigning a value to a property. Accepts exactly one parameter (the new value) and cannot return anything.

---

**Why Use Getters and Setters?**

* **Validation:** Prevent invalid data from being assigned to class properties (e.g., negative ages, empty names).
* **Encapsulation:** Keep internal implementation details private (`_propertyName`) while exposing a clean public API.
* **Computed Properties:** Return dynamically calculated values based on internal state without storing redundant data.
* **Read-Only / Controlled Write:** Expose data for reading without allowing external code to directly mutate the backing field.

---

**Basic Syntax & Example**

```typescript
class UserAccount {
  // Private backing property to store the actual data
  private _age: number = 0;

  // Getter: Read access
  get age(): number {
    return this._age;
  }

  // Setter: Write access with validation
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }
}

const user = new UserAccount();

// Using the setter (looks like standard property assignment)
user.age = 25; 

// Using the getter (looks like standard property access)
console.log(user.age); // Output: 25

// Triggers validation error inside setter
user.age = -5; // Error: Age cannot be negative.

```

---

**Computed Property Example**

Getters are frequently used to compute values on the fly:

```typescript
class Circle {
  constructor(public radius: number) {}

  // Computed getter - updates automatically when radius changes
  get area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area); // Output: 78.5398...

```

---

**Key Rules to Remember**

| Constraint | Detail |
| --- | --- |
| **Naming** | Conventionally, the backing field is prefixed with an underscore (e.g., `_age`) to avoid naming collisions with the `get age()` accessor. |
| **Read-Only Auto-Inference** | If a property has a `get` but no `set`, TypeScript automatically treats that property as `readonly`. |
| **Type Matching** | In TypeScript, if both getter and setter exist, their types must match (or the setter parameter type must be assignable to the getter return type). |
| **JS Output Target** | Getters and setters require target ES5 or higher in your `tsconfig.json`. |
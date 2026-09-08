# Typescript Assertions(Casting)

In TypeScript, assertions allow you to override the compiler's automatic type inference when you have more information about a value's type than TypeScript can automatically deduce.

## Casting with `as` keyword
A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable 

```ts
let x: unknown = 'hello';
console.log((x as string).length);
```
> [!NOTE]
> Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x still holds a number.

```ts
let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length
```

> [!NOTE]
> TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't make sense without converting the data:

```ts
console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
```

## The `unknown` Double-Assertion Escape Hatch (Force Casting)

To override type errors that TypeScript may throw when casting, first cast to `unknown` type, then to the target type.

> [!NOTE]
> Use this option very sparingly and only when required.

```ts
let x = 'hello';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
```

## Practical Examples:

```ts
const year = document.getElementById("year") as HTMLElement ;
const thisYear = new Date().getFullYear() as unknown as string; // assertion chaining // try to avoid AMAP;

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```
# Typescript Index Signatures

An index signature in TypeScript is a way to describe the type of an object when you don't know the exact property names in advance, but you do know the types of those properties.

## Examples

Without using Index Signature, you cannot add a dynamic property to an object.

```ts
let scores = {
    Aman: 80
}

console.log(scores); // {Aman: 80}

scores.Nihal = 78; // throws error, Property 'Nihal' does not exist on type '{ Aman: 80; }'.
```

With Index Signatures:

```ts
type StudentScores = {
    subjectCode: number, // this property will be required
    semester?: number, // optional property
    [studentName: string]: number, // dynamic property, should follow given signature
}

let scoresNew: StudentScores = {
    subjectCode: 1,
    // semester: 2, // optional
    Alice: 97,
    Bob: 88,
}

console.log(scoresNew); // {subjectCode: 1, Alice: 97, Bob: 88}


scoresNew.Benjamin = 45;
scoresNew["Jeevan-Shetty"] = 88; 

console.log(scoresNew);
/* 
    {
        "Alice": 97,
        "Bob": 88,
        "Benjamin": 77,
        "Jeevan-Shetty": 88
    }
*/
```

> [!NOTE]
> Every named property in the type must have a type that is assignable to the index signature's value type.

Example:
```ts
type StudentScores = {
    subjectCode: string,
    semester?: number,
    [studentName: string]: number | string,
}
```
Whereas
```ts
type StudentScores = {
    subjectCode: string | number,
    semester?: number,
    [studentName: string]: number,
}
```
Will give error:

> Property `subjectCode` of type `string | number` is not assignable to `string` index type `number`.

TypeScript does this because an index signature is a **promise**:
 
> "any string key you access on this object will give you a value of this type." 
> 
Since our named properties (`subjectCode` & `semester`) are also accessed via string keys, they have to honor that same promise — otherwise the type system can't guarantee consistency.

## `keyof` operator
The keyof operator in TypeScript is the index type query operator. It takes an object type and produces a union of its property keys as literal string or number types.

```ts

```

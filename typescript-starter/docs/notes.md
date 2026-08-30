# Typescript Starter

## Important Commands

```shell
# install typescript globally
npm i typescript -g
```

```shell
# compile typescript code
# generates a corresponding JavaScript file
tsc script.ts
```

```shell
# compile in watch mode
# recompiles the file on changes 
tsc script.ts -w
```

## Project Structure

This is how a typical Typescript project will look like

```txt
.
├── build
│   ├── index.html
│   └── js
│       ├── script.d.ts
│       ├── script.d.ts.map
│       ├── script.js
│       └── script.js.map
├── docs
│   └── notes.md
├── src
│   └── script.ts
└── tsconfig.json
```

## TS Config

Intialize a Typescript project

```shell
# create a tsconfig.json file
tsc --init
```

The above command will produce a `tsconfig.json` file. Modify it as per the requirements of your project. For more info on the `tsconfig.json` file, visit [TS Config Reference](https://aka.ms/tsconfig). The below example shows some typical changes you would want to make to run your typescript code along with html & css in a browser environment.

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./build/js",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    // For Browser environment
    "module": "esnext",
    "target": "es2022",
    "types": [],

    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Recommended Options
    "strict": true,
    "noEmitOnError": true,
  },
  "include": ["src"]
}
```

Also add the `type="module"` in the `index.html` file so that your browser will understand the Javascript file uses ES6 Modules:
```html
    <head>
            .
            .
        <script src="js/script.js" type="module" defer></script>
    </head>
```

Here is exactly what each of these settings tells the TypeScript compiler to do:

1. `"module": "esnext"`
   
   * This controls how your code handles imports and exports when compiling from TypeScript to JavaScript.

   * What it means: It tells TypeScript to leave your modern import and export statements alone instead of converting them into Node-style require() or exports structures.


2. `"target": "es2022"`
   * This controls how modern your output JavaScript syntax will be.

   * What it means: It tells the compiler, "The browser running this code is modern and understands JavaScript features up to the year 2022."
   * Why it matters: If you write very new JavaScript features (like class fields or top-level await), TypeScript looks at your target. If your target was an old standard like es5, TypeScript would write massive amounts of extra, complex code to "down-level" those features so ancient browsers could read them. Setting it to es2022 keeps your compiled output clean, short, and highly performant.

3. `"types": []`
    * This controls which global type definitions are automatically included in your project.

    * What it means: By setting it to an empty array [], you are telling TypeScript: "Do not automatically load global type definitions from my node_modules/@types folder."
    * Why it matters: If you have packages installed like Node, Jest, or Mocha, they often inject global variables (like process or describe) into your code autocompletion. Leaving "types" empty limits the project's scope, ensures Node-specific types don't accidentally leak into your browser code, and can make your TypeScript compilation slightly faster. (Note: You will still be able to use explicit import types from your dependencies normally).

4. `"include": ["src"]`
    
    * The `"include": ["src"]` configuration tells TypeScript exactly which folders and files to look at and compile in your project.
    
    * By default, if you don't specify an include setting, TypeScript will automatically look for and compile every single .ts file it can find anywhere in your root directory and its subfolders.

5. `"noEmitOnError": true,`
    
    * The `"noEmitOnError": true` setting tells TypeScript not to generate any JavaScript output files if there are compilation errors. 

    * The Default Behavior (false): By default, TypeScript acts like a friendly advisor. Even if your code has blatant type errors (e.g., trying to call a string like a function), TypeScript will print the error on your screen but will still successfully generate the .js files anyway.



6. The HTML `type="module"`
   
    Even with the correct `tsconfig.json` settings, browsers will reject import and export statements inside a standard `<script>` tag for security and architecture reasons. Adding type="module" acts as a green light, telling the browser: "Expect modern JavaScript modules here, look out for imports, and run this securely."
    (Bonus: Because type="module" scripts naturally load asynchronously in the background, the defer attribute is actually built-in by default now!)




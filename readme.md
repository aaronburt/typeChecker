# TypeChecker
The TypeChecker class provides a set of methods for performing type checking in JavaScript.

### Usage
To use the TypeChecker class, you will first need to import it into your project:

```
import TypeChecker from '@aaronburt/typechecker';
```

Once the class is imported, you can create an instance of it and use its methods to perform type checks on JavaScript values:

```
const typeChecker = new TypeChecker();

// Check if a value is a string
console.log(typeChecker.isString('hello world')); // Output: true

// Check if a value is a number
console.log(typeChecker.isNumber(123)); // Output: true

// Check if a value is a function
console.log(typeChecker.isFunction(() => {})); // Output: true

// Check if a value is an array
console.log(typeChecker.isArray([1, 2, 3])); // Output: true

// Check if a value is null
console.log(typeChecker.isNull(null)); // Output: true

// Check if a value is undefined
console.log(typeChecker.isUndefined(undefined)); // Output: true

// Check if a value is an error
console.log(typeChecker.isError(new Error())); // Output: true

// Check if a value is a promise
console.log(typeChecker.isPromise(Promise.resolve())); // Output: true

// Check if a value is a map
console.log(typeChecker.isMap(new Map())); // Output: true

// Check if a value is an object
console.log(typeChecker.isObject({})); // Output: true

// Check if a value is an async function
console.log(typeChecker.isAsyncFunction(async () => {})); // Output: true
```
### Methods
The TypeChecker class provides the following methods for performing type checks:

- isType(value: any, type: any) - Checks if a given value is of the specified type.
- isString(input: string) - Checks if a given value is a string.
- isNumber(input: number) - Checks if a given value is a number.
- isFunction(input: Function) - Checks if a given value is a function.
- isArray(input: any[]) - Checks if a given value is an array.
- isNull(input: null) - Checks if a given value is null.
- isUndefined(input: undefined) - Checks if a given value is undefined.
- isError(input: any) - Checks if a given value is an error.
- isPromise(input: Promise<any>) - Checks if a given value is a promise.
- isMap(input: Map<any, any>) - Checks if a given value is a map.
- isObject(input: Object) - Checks if a given value is an object.
- isAsyncFunction(input: any) - Checks if a given value is an async function.
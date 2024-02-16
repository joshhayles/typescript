// An object is a non-primitive data type.
// This next line declares a function called "createObject", it takes a parameter called "object", which can be of type object, or null. The return type of the function is "void", indicating the function doesn't return a value
// The declare keyword is typically used to declare functions that are expected to be implemented elsewhere, such as in external libraries or modules. This tells TypeScript that the function exists but you are not providing its implementation

// declare function createObject(object: object | null): void

function createObject2(object2: object | null): object | null{
  return object2;
}

console.log(createObject2({ Josh: 42 }));
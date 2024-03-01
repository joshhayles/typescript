// this defines a Typescript alias named 'DataStructures', and represents a union type, which means it can hold values of any one of these different types:
type DataStructures = 
  | { key: "value" } // objects
  | [1, 2, 3] // tuples can not be altered
  // | number[] // lists / an array with type 'number'

const example1: DataStructures = { key: "value" }; // valid
// const example2: DataStructures = [1, 10, 6, 3]; // error: not allowed to be assigned
const example3: DataStructures = [1, 2, 3]; // valid

console.log(example1); // -> { key: 'value' }
console.log(example3); // -> [ 1, 10, 6, 3 ]
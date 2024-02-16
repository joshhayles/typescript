// strongly typed
let isDone: boolean = false;
let isName: string = "Josh";
let isList: string[] = ["item1", "item2"];
let isList2: Array<string> = ["item3", "item4"]; // another option
let isList3: readonly string[] = ["Joshua"];  // readonly prevents arrays from being changed
let isNumberList: number[] = [1, 2, 3, 4, 5];
let notSure: any = []; // can be of any type
notSure = "Maybe a string?";
let unUsable: void = undefined;
let firstName = "Not sure" // Implicit: Typescript will "guess" the type, based on the assigned value, and won't throw an error if there is an attempt to re-assign the value to a different type

// tuple: array where elements can be different types

// declare a tuple type:
let x: [string, number];

// initialize it:
x = ["Josh", 42];

console.log(isDone);
console.log(isName);
console.log(isList);
console.log(isList2);
console.log(isNumberList);
console.log(notSure); // -> "Maybe a string?"
console.log(unUsable);
console.log(firstName);
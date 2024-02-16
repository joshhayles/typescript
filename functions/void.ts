// void is the absence of having any type at all. Javascript functions always return an "undefined" by default if no return statement is provided. Even though "void" is specified here, the function technically returns "undefined." However, in Typescript, specifying "void" explicitly emphasizes the intention that the function is not expected to return any meaningful value

function warnUser(): void {
  console.log("My warning message...");
}

warnUser(); // -> Hello

// "undefined" and "null" are of their own types, "undefined" and "null"
let u: undefined = undefined; 
console.log(u); // -> undefined

let n: null = null;
console.log(null); // -> null
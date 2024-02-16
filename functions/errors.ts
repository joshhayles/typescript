// "never" represents the types of values that will never occur. This indicates that a function will likely either throw an error, or enter an infinite loop

function error(message: string): never {
  throw new Error(message);
}

try {
  error("my error message");
} catch (e: any) {
  console.log("Caught error message:", e.message);
}


// this declares a function named "never" that takes a parameter "message" of type: string. It then indicates a return type of "never," indicating the function never produces a return value

// it uses a "throw" statement and creates a new Error object with the specified "message." When this line executes, it immediately stops the execution of the function and transfers control to the nearest "catch" block. If there isn't one, it goes to the calling code (the code that invokes the function)
// intersections refer to combining multiple types into a single type that contains all the members of each individual type.

// interfaces are syntactical instructions that defines methods, properties, and behaviors that an entity (class, object) must conform to.

interface A {
  proposalA: number;
}

interface B {
  proposalB: string;
}

type AB = A & B; // creates a new type 'AB' which is an intersection of types A and B. Meaning, any object of type AB must satisfy the requirements of both interfaces A and B:

let myObj: AB = {
  proposalA: 42,
  proposalB: "Josh"
};

console.log(myObj); // -> { proposalA: 42, proposalB: 'Josh' }
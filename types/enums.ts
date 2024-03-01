// short for "enumeration," enum is a data type that consists of a set of named constants, known as enum members. They are used to represent a fixed set of possible values or states

// define an enum with 4 enum members:
enum Direction {
  Up,
  Down,
  Left,
  Right
};

let myDirection: Direction = Direction.Left;

console.log(myDirection); // -> 2

// each enum member is automatically assigned a numeric value starting from '0' by default. The subsequent numbers are incremented by 1.
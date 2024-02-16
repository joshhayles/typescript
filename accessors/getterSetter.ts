// accessors require you to set the compiler to output ECMAScript 5, or higher
// accessors with a 'get' but no 'set' are automatically inferred to be readonly

class Car {
    private _speed: number = 0;  // using _ as a prefix is often used to indicate they are intended to be private, or internal to the class. It can't be directly assessed or modified from outside the class.

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        if (value >= 0) {
            this._speed = value;
        } else {
            console.log("Speed must be a positive number");
        }
    }
}

// create an instance of the class
const myCar = new Car();

// get the current speed
console.log("Current speed:", myCar.speed);  // -> Current speed: 0

// set the speed
myCar.speed = 60;

// get updated speed
console.log("New speed:", myCar.speed);  // -> New speed: 60

// if you try to set a negative speed, it will trigger the setter's validation
myCar.speed = -1037;
console.log("New Speed:", myCar.speed);  // -> Speed must be a positive number
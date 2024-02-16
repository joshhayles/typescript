class Test {
    static message = "Hello";
    showMessage(name: string) {
        console.log(Test.message + ' ' + name);
    }
}

let test = new Test();

test.showMessage("Joshua")  // -> Hello Joshua
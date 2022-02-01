function howdy() {
    return {
        a: 1,
        b: 2,
        get: () => {
            console.log("I am");
        }
    }
}
let hello = {
    get: () => {
        console.log("I am 2");
    }
}

howdy().get();
hello.get();
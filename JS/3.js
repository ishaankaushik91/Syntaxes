// Arrow function Recursion
let summation = (num) => {
    if (num <= 10) {
        return num + summation(num + 1);
    }
    return 0;
}

console.log(summation(0));
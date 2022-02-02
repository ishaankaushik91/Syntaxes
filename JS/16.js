// Sigma Factorial (LOOP)
function Factorial(num) {
    let pi = 1;
    for (let i = 1; i <= num; i++) {
        pi *= i;
    }
    return pi;
}
function Call(range) {
    let sum = 0;
    for (let i = 1; i <= range; i++) {
        sum += Factorial(i);
    }
    return sum;
}
console.log(Call(5));
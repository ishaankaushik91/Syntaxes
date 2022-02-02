// Sigma Factorial (RECURSION)
function Factorial(num) {
    if (num >= 1) {
        return num * Factorial(num - 1);
    }
    return 1;
}
function Call(range) {
    if (range <= 5) {
        return Call(range + 1) + Factorial(range);
    }
    return 0;
}
console.log(Call(1));
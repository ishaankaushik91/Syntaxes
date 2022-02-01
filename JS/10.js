// Reverse Geometric Series (RECURSION)
function Power(i, expo, num) {
    if (i <= expo) {
        return num * Power(i + 1, expo, num);
    }
    return 1
}

function Geometric(start, range) {
    if (start <= range) {
        console.log(Power(1, start, 3));
        return Geometric(start + 1, range);
    }
    return 0;
}

Geometric(1, 10);
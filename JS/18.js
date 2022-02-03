// Printing Tables of prime numbers in random no. & redirecting to another file (LOOP)
function PrimeCheck(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

function Table(number) {
    if (PrimeCheck(number)) {
        for (let i = 1; i <= 10; i++) {
            console.log("%d x %d = %d\n", number, i, number * i);
        }
    }
}

for (let i = 0; i <= 100; i++) {
    Table(i);
}
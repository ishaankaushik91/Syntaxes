// Separating Primes & Non Primes (LOOP)
let Arr = [], A = [], B = [];

for (let i = 0; i < 10; i++) {
  let Check = 1;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      Check = 0;
      break;
    }
  }
  if (Check) {
    A.push(i);
  }
}

for (let i = 0; i <= 20; i++) {
  let Check = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      Check = 1;
      break;
    }
  }
  if (Check) {
    B.push(i);
  }
}

Arr.push(A);
Arr.push(B);
console.log(Arr);
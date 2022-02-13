// Forcefully making cousin prime pair (LOOP)

let num = 7,
  drum = num + 1;

while (PrimeCheck(num) + PrimeCheck(drum) != 2) {
  drum += 1;
}
console.log(num, drum);

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

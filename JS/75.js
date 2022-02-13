// Forcefully making cousin prime pair (RECURSION)

let num1 = 4,
  num2 = 6;

Cousins(num1, num2);

function Cousins(number, cucumber) {
  if (PrimeCheck(2, number) + PrimeCheck(2, cucumber) != 2) {
    return Cousins(number + 1, cucumber + 1);
  }
  console.log(number, cucumber);
}

function PrimeCheck(i, num) {
  if (i < num) {
    if (num % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, num);
  }
  return 1;
}

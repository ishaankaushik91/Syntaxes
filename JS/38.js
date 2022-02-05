// Forcefully making a given number prime if Not (RECURSION)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a num : ");

if (PrimeCheck(2, Num)) {
  console.log("Already a prime");
} else {
  MakePrime(Num);
}

function MakePrime(bum) {
  if (PrimeCheck(2, bum) == 0) {
    return MakePrime(bum + 1);
  }
  console.log(bum);
}
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

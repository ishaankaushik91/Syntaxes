// Trying Prime Factorisation Algorithm (LOOP)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a number\n");

if (PrimeCheck(Num)) {
  console.log("Already a Prime");
} else {
  for (let i = 1; i <= Num; i++) {
    for (let j = 1; j <= Num; j++) {
      if (PrimeCheck(i) && PrimeCheck(j)) {
        if (i * j == Num) {
          console.log(i + "x", +j);
        }
      }
    }
  }
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

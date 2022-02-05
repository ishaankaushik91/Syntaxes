// Forcefully making a given number prime if Not (LOOP)
import readline from "readline-sync";

let num = readline.questionInt("Enter a number : ");

if (PrimeCheck(num)) {
  console.log("Already a prime ");
} else {
  let New_num = num;
  for (let i = 1; i <= 100; i++) {
    New_num += 1;
    if (PrimeCheck(New_num)) {
      console.log("The prime formed is --> ", New_num);
      break;
    }
  }
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

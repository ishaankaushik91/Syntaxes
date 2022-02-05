// Storing numbers at even index & string at odd index (RECURSION)
import readline from "readline-sync";

let A = [];
Asking(0, A);

function Asking(i, A) {
  if (i < 10) {
    if (i % 2 == 0) {
      let Ask = readline.questionInt("Enter a number : ");
      A[i] = Ask;
      return Asking(i + 1, A);
    } else {
      let Ask = readline.question("Enter some text : ");
      A[i] = Ask;
      return Asking(i + 1, A);
    }
    return Asking(i + 1, A);
  }
  console.log(A);
}
// Log algorithm (RECURSION)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a number ");
console.log(Log(1, Num));

function Log(start, num) {
  if (start <= Num) {
    if (start * start == num) {
      return start;
    }
    return Log(start + 1, num);
  }
  return "In decimal";
}

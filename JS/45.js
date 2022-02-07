// finding what to add to get the given number like all permutations (LOOP)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a number\n");

for (let i = 1; i <= Num; i++) {
  for (let j = 1; j <= Num; j++) {
    if (i + j == Num) {
      console.log(i, j);
    }
  }
}

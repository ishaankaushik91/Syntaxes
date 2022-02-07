// finding what to sub to get the given number like all permutations (LOOP)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a number\n");

for (let i = Num * 2; i >= 0; i--) {
  for (let j = Num * 2; j >= 0; j--) {
    if (j - i == Num) {
      console.log(i, j);
    }
  }
}

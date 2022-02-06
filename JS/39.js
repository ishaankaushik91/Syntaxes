// Delete element from given index (LOOP)
import readline from "readline-sync";
let Ele = readline.questionInt("Enter the index to be deleted : ");

let Arr = [];
for (let i = 0; i < 10; i++) {
  Arr[i] = i + 3 * 9;
}
console.log(Arr);
for (let i = Ele; i < 10; i++) {
  Arr[i] = Arr[i + 1];
}
console.log(Arr);

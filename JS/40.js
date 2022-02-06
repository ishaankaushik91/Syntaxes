// Delete element from given index (RECURSION)
import readline from "readline-sync";
let Ele = readline.questionInt("Enter the index to be deleted : ");

let Arr = [];
for (let i = 0; i < 10; i++) {
  Arr[i] = i + 3 * 9;
}
console.log(Arr);

Delete(Ele, Arr);

function Delete(i, A) {
  if (i < A.length) {
    A[i] = A[i + 1];
    return Delete(i + 1, A);
  }
  console.log(A);
  return 0;
}

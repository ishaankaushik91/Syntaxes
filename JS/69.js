// Finding duplicates in Array (RECURSION)
let A = [1, 2, 3, 4, 5, 3, 7, 9, 9];

Duplicate(0, A);

function Duplicate(i, A) {
  if (i < A.length) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) {
        console.log("Bro at ", i, " is ", A[i]);
      }
    }
    return Duplicate(i + 1, A);
  }
  return 0;
}

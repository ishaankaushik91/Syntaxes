// Sigma k^k + 3 (LOOP)
function Power(num) {
  let pi = 1;
  for (let i = 1; i <= num; i++) {
    pi *= num;
  }
  return pi;
}

function Summation() {
  let sum = 0;
  for (let k = 1; k <= 10; k++) {
    sum += Power(k) + 3;
  }
  return sum;
}

console.log(Summation());

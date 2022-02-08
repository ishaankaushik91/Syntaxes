async function Result(num) {
  return new Promise((resolve, reject) => {
    if (PrimeCheck(2, num)) {
      resolve("Prime!");
    } else {
      reject("Composite!");
    }
  });
}

function PrimeCheck(i, number) {
  if (i < number) {
    if (number % i == 0) {
      return 0;
    }
    return PrimeCheck(i + 1, number);
  }
  return 1;
}

try {
  let a = await Result(101 + 2);
  console.log(a);
} catch (error) {
  console.log(error);
}

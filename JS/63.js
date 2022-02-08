import axios from "axios";
//https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0

function YesOrNo(input) {
  return new Promise((resolve, reject) => {
    if (PrimeCheck(input) == 1) {
      resolve(" is prime ! ");
    } else {
      reject(" is composite ! ");
    }
  });
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

YesOrNo(101)
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log(error);;
})
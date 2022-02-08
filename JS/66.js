import axios from "axios";
import readline from "readline-sync";

let Num1 = readline.questionInt("Enter num 1 ");
let Num2 = readline.questionInt("Enter num 2 ");

async function hitApi() {
  return axios.get(`http://59.92.225.188:5000/add/${Num1}/${Num2}`);
}

async function last(number, lastSum) {
  return axios.get(`http://59.92.225.188:5000/add/${number}/${lastSum}`);
}

try {
  let a = await hitApi();
  console.log("Sum of first 2 = ", a);
  let Num3 = readline.questionInt("Enter num 3 ");
  let Final = await last(Num3, a);
  console.log(Final);
} catch (error) {
  console.log(error);
}

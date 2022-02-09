import readline from "readline-sync";

let IP = readline.question("Enter an IP address ");
let Octets = IP.split(".");

try {
  let Response = await Validity(Octets);
  console.log(Response);
} catch (error) {}

async function Validity(Oct) {
  let valid = 0;

  for (let i = 0; i < Oct.length; i++) {
    if (parseInt(Oct[i]) >= 0 && parseInt(Oct[i]) <= 255) {
      valid++;
    }
  }

  return new Promise((resolve, reject) => {
    if (valid == 4) {
      resolve(`Valid IP!!!`);
    } else {
      reject(`Invalid IP!`);
    }
  });
}

// Algorithm to validate Ipv4
let readline = require("readline-sync");

let IPv4 = readline.question("Please enter an IPv4 :");

let Octets = IPv4.split(".");

let ValidOctets = 0;

Octets.forEach((oct) => {
    if (parseInt(oct) >= 0 && parseInt(oct) <= 255) {
        ValidOctets++;
    }
})

console.log("Validating your IP in 5 seconds.....");

setTimeout(() => {

    if (ValidOctets == 4) {
        console.log("A valid IPv4");
    }
    else {
        console.log("Invalid IPv4 !");
    }

}, 5000)
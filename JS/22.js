import axios from "axios";
import readline from "readline-sync";
import terminalimage from "terminal-image";

let UserName = readline.question("Enter your user name : ");

axios
  .get(`https://api.github.com/users/${UserName}`, {
    auth: {
      username: `${UserName}`,
      password: "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",
    },
  })
  .then((res) => {
    console.log(`The no. of followers of ${UserName} are ${res.data.followers} & following is ${res.data.following}`);
  })
  .catch((err) => {
    console.log("Please check credentials");
  });
import axios from "axios";
import readline from "readline-sync";
import terminalImage from "terminal-image";

let UserName = readline.question("Enter username : ");

function Ping(link)
{
    return axios.get(`https://api.github.com/users/${link}`)
}

Ping(UserName)
.then((res) => {
    let DP = res.data.avatar_url;
    console.log(DP);
})
.catch((err) => {
    console.log(err);
})
// GitHub pic authentication CLI
import readline from "readline-sync";
import axios from "axios";
import terminalImage from "terminal-image";

let UserName = readline.question("Please enter username : ");

function Ping()
{
    return axios.get(`https://api.github.com/users/${UserName}`, {
        auth : `${UserName}`,
        password : "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",
    });
}

function Profile_Pic(link)
{
    return axios.get(`${link}`);
}

Ping()
.then((res) => {
    let Dp = res.data.avatar_url;
    console.log(`This is ${res.data.login} with ${res.data.followers} followers &  ${res.data.following} following`);
    Profile_Pic(Dp);
    
})
.catch((err) => {
    console.log("Please Check again !");
})
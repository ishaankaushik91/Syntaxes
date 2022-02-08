import axios from "axios";

let Keys = {
    auth: {
        username: "ishaankaushik91",
        password: "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"
    }
}
// https://api.github.com/users

async function Hit()
{
    return axios.get("https://api.github.com/users")
}

try {
    let Response_from_Server = await Hit();
    let Names = Response_from_Server.data.map((ele) => ele.login);
    console.log(Names);
} catch (error) {
    console.log(error);
}
import axios from "axios";

let Keys = {
    auth: {
        username: "ishaankaushik91",
        password: "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"
    }
}
// https://api.github.com/users

function Hit()
{
    return axios.get(`https://api.github.com/users`, Keys)
}

Hit()
.then((res) => {
    let Names = res.data.map((ele) => ele.login);
    console.log(Names);
})
.catch((err) => {
    console.log(err);
})
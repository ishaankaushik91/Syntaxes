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
    return axios.get("https://api.github.com/users", Keys)
}

function Individual(link)
{
    return axios.get(`https://api.github.com/users/${link},`, Keys)
}

try {
    let Response_from_Server = await Hit();
    let Names = Response_from_Server.data.map((Ele) => Ele.login);
    
    for (let i = 0; i < Names.length; i++)
    {
        Individual(Names[i])
        .then((res) => {
            console.log(res.data.followers);
        })
    }

} catch (error) {
    
}
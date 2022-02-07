import axios from "axios";

let Keys = {
    auth: {
        username: "ishaankaushik91",
        password: "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"
    }
}

async function GitApi()
{
    try {
        let response = await axios.get(`https://api.github.com/users`, Keys)
        let Names = response.data.map((ele) => ele.login);
        console.log(Names);
    } catch (error) {
        
    }
}

GitApi();
import axios from "axios";

let Keys = {
    auth: {
        username: "ishaankaushik91",
        password: "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"
    }
}
// https://api.github.com/users

async function HitApi()
{
    try {
        let Res_Server = await axios.get("https://api.github.com/users", Keys)
        let Names = Res_Server.data.map((ele) => ele.login);

        Names.forEach(async(every) => {
            try {
                let a = await axios.get(`https://api.github.com/users/${every}`, Keys)
                console.log(a.data.followers);
            } catch (error) {
                console.log(error);
            }
        })

    } catch (error) {
        console.log(error);
    }
}

HitApi()
import axios from "axios";

async function hitAPI()
{
    try {
        let res = await axios.get("https://api.github.com/users")
        res.data.forEach(async(user) => {
            let UserData = await axios.get(`https://api.github.com/users/${user.login}`);
            console.log(UserData.followers);
        })
    } catch (error) {
        console.log(error);
    }
}

hitAPI();
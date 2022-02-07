// Done till extracting all image URLs
import axios from "axios";

function Hit()
{
    return axios.get(`https://api.github.com/users`, {
        auth: {
            username: "ishaankaushik91",
            password: "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"
        }
    })
}

function Individual(link)
{
    return axios.get(`https://api.github.com/users/${link}`)
}

Hit()
.then((res) => {
    let Names = res.data.map((each) => each.login);
    return Names;
})
.then((Names) => {

    let Avatar = [];

    for (let i = 0; i < Names.length; i++)
    {
        Individual(Names[i])
        .then((res) => {
            Avatar.push(res.data.avatar_url);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    setTimeout(() => {
        console.log(Avatar);
    }, 10000)
})

.catch((err) => {
    console.log(err);
})
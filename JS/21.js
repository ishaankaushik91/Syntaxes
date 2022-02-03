let axios = require("axios");

function getApi() {
    return axios.get("https://api.github.com/users", {
        auth: {
            username: "ishaankaushik91",
            password: "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"
        }
    });
}

function Accept(Arr) {
    Arr.forEach((elem) => {
        axios.get(`https://api.github.com/users/${elem}`, {
            auth: {
                username: "ishaankaushik91",
                password: "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"
            }
        })
            .then((res) => {
                console.log(`The no. of followers of ${elem} are ${res.data.followers}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    );
}

getApi()
    .then((res) => {
        let Arr = res.data.map((elem) => elem.login);
        Accept(Arr);
    })
    .catch((err) => {
        console.log(err);
    })
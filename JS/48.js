import axios from "axios";

function hitAPI() {
  return axios.get(`https://api.github.com/users`, {
    auth: {
      username: "ishaankaushik91",
      password: "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",
    },
  });
}

hitAPI()
.then((res) => {

    let Result = res.data.map((ele) => axios.get(`https://api.github.com/users/${ele.login}`, {
        auth: {
            username: "ishaankaushik91",
            password: "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",
        }
    }))
    Promise.all(Result)
    .then((responses) => {

        Promise.all(Result)
        .then((response) => {
            response.forEach((res) => {
                console.log(res.data.followers, " for ", res.data.login);
            })
        })

    })
    .catch((err) => {
        console.log(err);
    })

})
  .catch((err) => {
    console.log(err);
  });

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
    res.data.forEach((ele) => {
      axios
        .get(`https://api.github.com/users/${ele.login}`, {
          auth: {
            username: "ishaankaushik91",
            password: "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",
          },
        })
        .then((res) => {
          console.log(res.data.followers, " of ", res.data.login);
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });

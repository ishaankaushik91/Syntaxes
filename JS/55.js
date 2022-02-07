import axios from "axios";

let Keys = {
  auth: {
    username: "ishaankaushik91",
    password: "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",
  },
};

async function Git() {
  try {
    let res = await axios.get(`https://api.github.com/users`, Keys);
    let Names = res.data.map((Ele) => Ele.login);
    //console.log(Names);
    let Followers = [];

    Names.forEach(async (Ele) => {
      let Person = await axios.get(`https://api.github.com/users/${Ele}`, Keys);
      Followers.push(Person.data.followers);
    });
  } catch (error) {}
}

Git();

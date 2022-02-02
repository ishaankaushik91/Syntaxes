let axios = require("axios");

axios.get("https://reqres.in/api/users?page=2")
    .then(function (response) {
        //console.log(response.data.data);
        let New_Data = [];
        response.data["data"].forEach((index) => {
            New_Data.push(index.first_name + index.last_name);
        })
        console.log(New_Data);
    })
    .catch(function (err) {
        console.log("Not found !");
    })
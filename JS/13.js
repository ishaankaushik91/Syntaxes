let axios = require("axios");

axios.get("wef")
    .then(function (response) {
        console.log(response);
    })
    .catch(function () {
        console.log("Error");
    })
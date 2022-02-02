let axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {

        let Data = response.data;
        let result = [];
        let temp = [];
        let tempo = 0;
        let ID_index = 10;
        for (let i = 0; i < Data.length; i++) {
            if (tempo >= ID_index) {
                ID_index = ID_index + 10;
                result.push(temp);
                //tempo = ID[ID_index] - 10;
            }
            if (tempo < ID_index) {
                temp[tempo] = Data[i].title;
                //console.log(Data[i].id,temp[tempo]);
                tempo++;
            }
        }
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
        console.log("Error");
    })
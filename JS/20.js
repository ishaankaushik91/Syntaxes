let axios = require("axios")

function hitAPI(id)
{
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

hitAPI(5)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
import axios from "axios"
import readline from "readline-sync";

let Num1 = readline.questionInt("Enter num 1 ");
let Num2 = readline.questionInt("Enter num 2 ");
let Num3 = readline.questionInt("Enter num 3 ");

function hitApi()
{
    return axios.get(`http://59.92.225.188:5000/add/${Num1}/${Num2}`)
}

hitApi()
.then((res) => {

    axios.get(`http://59.92.225.188:5000/add/${res.data}/${Num3}`)
    .then((res) =>{
        console.log(res.data);
    })

})
.catch((err) => {
    console.log(err);
})
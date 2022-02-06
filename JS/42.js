// Log algorithm (LOOP)
import readline from "readline-sync";

let Num = readline.questionInt("Enter a number");

for (let i = 1; i < Num; i++)
{
    if (i * i == Num)
    {
        console.log(i);
        break;
    }
}
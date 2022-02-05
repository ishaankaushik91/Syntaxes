// Storing numbers at even index & string at odd index (LOOP)
import readline from "readline-sync";
let A = [];

for (let i = 0; i < 10; i++)
{
    if (i % 2 == 0)
    {
        let Ask = readline.questionInt("Enter a number : ");
        A[i] = Ask;
    }
    else
    {
        let Ask = readline.question("Enter some text : ");
        A[i] = Ask;
    }
}
console.log(A);
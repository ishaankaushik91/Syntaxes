// Reverse Geometric Series (LOOP)
function Power(num, expo)
{
    let pi = 1;
    for (let i = 1; i <= expo; i++)
    {
        pi *= num;
    }
    return pi;
}

function Geometric()
{
    for (let i = 10; i >= 1; i--)
    {
        console.log(Power(3, i));
    }
}
Geometric();
// Sigma k^k + 3 (RECURSION)
function Power(start, num)
{
    if (start <= num)
    {
        return num * Power(start + 1, num);
    }
    return 1;
}
function Summation(number)
{
    if (number <= 10)
    {
        return Summation(number + 1) + (Power(1, number) + 3);
    }
    return 0;
}
console.log(Summation(0));
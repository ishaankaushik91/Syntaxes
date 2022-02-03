// Printing Tables of prime numbers in random no. & redirecting to another file (RECURSION)
function PrimeCheck(i, num)
{
    if (i < num)
    {
        if (num % i == 0)
        {
            return 0;
        }
        return PrimeCheck(i + 1, num);
    }
    return 1;
}

function Table(range, number)
{
    if (PrimeCheck(2, number))
    {
        if (range <= 10)
        {
            console.log("%d x %d = %d\n", number, range, number * range);
            return Table(range + 1, number);
        }
    }
}

for (let i = 0; i <= 100; i++)
{
    Table()
}
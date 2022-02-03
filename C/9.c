// Printing Tables of prime numbers in random no. & redirecting to another file (RECURSION)
#include <stdlib.h>
#include <stdio.h>
int PrimeCheck(int i, int num);
void Table(int range, int number);
int main()
{
    
    return 0;
}
int PrimeCheck(int i, int num)
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
void Table(int range, int number)
{
    if (PrimeCheck(2, number))
    {
        if (range <= 10)
        {
            printf("%d x %d = %d\n", number, range, number * range);
            return Table(range + 1, number);
        }
    }
}
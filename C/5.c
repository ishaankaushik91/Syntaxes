// Primes less than 150 (RECURSION)
#include <stdio.h>
int PrimeCheck(int i, int num);
void Call(int start);
int main()
{
    Call(0);
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
void Call(int start)
{
    if (start <= 150)
    {
        if (PrimeCheck(2, start))
        {
            printf("%d\n", start);
        }
        return Call(start + 1);
    }
}
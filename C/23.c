// Making a number forcefully prime (RECURSION)
#include <stdio.h>
int PrimeCheck(int start, int num);
void MakePrime(int Drum);
int main()
{
    int Number;
    printf("Enter a number\n");
    scanf("%d", &Number);

    if (PrimeCheck(2, Number))
    {
        printf("Already a Prime!\n");
    }
    else
    {
        MakePrime(Number);
    }
    return 0;
}
int PrimeCheck(int start, int num)
{
    if (start < num)
    {
        if (num % start == 0)
        {
            return 0;
        }
        return PrimeCheck(start + 1, num);
    }
    return 1;
}
void MakePrime(int Drum)
{
    if (PrimeCheck(2, Drum) == 0)
    {
        return MakePrime(Drum + 1);
    }
    printf("%d\n", Drum);
}
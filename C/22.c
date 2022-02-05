// Making a number forcefully prime (LOOP)
#include <stdio.h>
int PrimeCheck(int Num);
void MakePrime(int Bum);
int main()
{
    int Number;
    printf("Enter a number\n");
    scanf("%d", &Number);
    if (PrimeCheck(Number))
    {
        printf("Already a prime !\n");
    }
    else
    {
        MakePrime(Number);
    }
    return 0;
}
int PrimeCheck(int Num)
{
    for (int i = 2; i < Num; i++)
    {
        if (Num % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
void MakePrime(int Bum)
{
    while (PrimeCheck(Bum) == 0)
    {
        Bum += 1;
    }
    printf("%d\n", Bum);
}
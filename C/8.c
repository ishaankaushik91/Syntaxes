// Printing Tables of prime numbers in random no. & redirecting to another file (LOOP)
#include <stdio.h>
#include <stdlib.h>
int PrimeCheck(int num);
void Table(int number);
int main()
{
    int Arr[100];
    for (int i = 0; i < 100; i++)
    {
        Arr[i] = rand() % 100;
        Table(Arr[i]);
    }
    return 0;
}
int PrimeCheck(int num)
{
    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
void Table(int number)
{
    if (PrimeCheck(number))
    {
        for (int i = 1; i <= 10; i++)
        {
            printf("%d x %d = %d\n", number, i, number * i);
        }
    }
}
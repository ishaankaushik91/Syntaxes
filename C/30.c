// Trying Prime Factorisation Algorithm (LOOP)
#include <stdio.h>
int PrimeCheck(int number);
int main()
{
    int num;
    printf("Enter a number \n");
    scanf("%d", &num);

    if (PrimeCheck(num))
    {
        printf("1 x %d\n", num);
    }
    else
    {
        for (int i = 1; i <= num; i++)
        {
            for (int j = 1; j <= num; j++)
            {
                if (PrimeCheck(i) && PrimeCheck(j))
                {
                    if (i * j == num)
                    {
                        printf("%d x %d", i, j);
                    }
                }
            }
        }
    }

    return 0;
}
int PrimeCheck(int number)
{
    for (int i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
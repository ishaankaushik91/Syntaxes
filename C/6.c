// Sigma Factorial (LOOP)
#include <stdio.h>
int Factorial(int num);
int Summation(int nums_range);
int main()
{
    printf("Summation = %d\n", Summation(5));
    return 0;
}
int Factorial(int num)
{
    int pi = 1;
    for (int i = 1; i <= num; i++)
    {
        pi *= i;
    }
    return pi;
}
int Summation(int nums_range)
{
    int sum = 0;
    for (int i = 1; i <= nums_range; i++)
    {
        sum += Factorial(i);
    }
    return sum;
}
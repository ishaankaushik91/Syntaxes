// Sigma Factorial (RECURSION)
#include <stdio.h>
int Factorial(int num);
int Call(int range);
int main()
{
    printf("Summation = %d\n", Call(1));
    return 0;
}
int Factorial(int num)
{
    if (num >= 1)
    {
        return num * Factorial(num - 1);
    }
    return 1;
}
int Call(int range)
{
    if (range <= 5)
    {
        return Factorial(range) + Call(range + 1);
    }
    return 0;
}
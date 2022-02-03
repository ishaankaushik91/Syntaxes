// Sigma k^k + 3 (RECURSION)
#include <stdio.h>
int Power(int start, int num);
int Summation(int range);
int main()
{
    printf("%d\n", Summation(0));
    return 0;
}
int Power(int start, int num)
{
    if (start <= num)
    {
        return num * Power(start + 1, num);
    }
    return 1;
}
int Summation(int range)
{
    if (range <= 10)
    {
        return Summation(range + 1) + (Power(1, range) + 3);
    }
    return 0;
}
// Sigma k^k + 3 (LOOP)
#include <stdio.h>
int Power(int num);
int Summation();
int main()
{
    printf("%d\n", Summation());
    return 0;
}
int Power(int num)
{
    int pi = 1;
    for (int i = 1; i <= num; i++)
    {
        pi *= num;
    }
    return pi;
}
int Summation()
{
    int sum = 0;
    for (int k = 0; k <= 10; k++)
    {
        sum += Power(k) + 3;
    }
    return sum;
}
// Double Sigma i + j (RECURSION)
#include <stdio.h>
int P(int i);
int Q(int j);
int main()
{
    printf("%d\n", P(0));
    return 0;
}
int P(int i)
{
    if (i <= 5)
    {

        return (Q(0) + i) + P(i + 1);
    }
    return 0;
}
int Q(int j)
{
    if (j <= 3)
    {
        return j + Q(j + 1);
    }
    return 0;
}
// Number pattern (RECURSION)
#include <stdio.h>
int pattern(int i);
int Incre(int num, int j);
int main()
{
    pattern(1);
    return 0;
}
int pattern(int i)
{
    if (i <= 5)
    {
        Incre(1, i);
        printf("\n");
        return pattern(i + 1);
    }
    return 0;
}
int Incre(int num, int j)
{
    if (num <= j)
    {
        printf("%d ", num);
        return Incre(num + 1, j);
    }
    return 0;
}
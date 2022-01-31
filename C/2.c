// Priting Pattern (RECURSION)
#include <stdio.h>
void Pattern(int i);
void Supporter(int j, int k);
int main()
{
    Pattern(0);
    return 0;
}
void Pattern(int i)
{
    if (i < 5)
    {
        Supporter(0, i);
        printf("\n");
        return Pattern(i + 1);
    }
}
void Supporter(int j, int k)
{
    if (j <= k)
    {
        printf("* ");
        return Supporter(j + 1, k);
    }
}
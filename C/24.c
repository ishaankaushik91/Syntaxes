// Double Sigma i + j (LOOP)
#include <stdio.h>
int main()
{
    int sum = 0;

    for (int i = 0; i <= 5; i++)
    {
        for (int j = 0; j <= 3; j++)
        {
            sum += (i + j);
        }
    }
    printf("%d\n", sum);
    return 0;
}
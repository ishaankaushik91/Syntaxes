// Printing Matrix (LOOP)
#include <stdio.h>
int main()
{
    int Matrix[3][3];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            Matrix[i][j] = (i + j) * 3 / 1;
            printf("%d ", Matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
// Sum of Rows in Matrix (LOOP)
#include <stdio.h>
int main()
{
    int Matrix[2][3] = {{1, 2}, {3, 4, 5}};

    for (int i = 0; i < 2; i++)
    {
        int sum = 0;
        for (int j = 0; j < 3; j++)
        {
            sum += Matrix[i][j];
        }
        printf("%d\n", sum);
    }

    return 0;
}
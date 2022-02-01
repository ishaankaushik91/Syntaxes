// Summation of all elements of a Matrix (LOOP)
#include <stdio.h>
int main()
{
    int Matrix[2][3] = {{1, 10, 9}, {10, 8, 7}}, sum = 0;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            sum += Matrix[i][j];
        }
    }
    printf("%d\n", sum);
    return 0;
}
// Printing Frequency of each element in a Matrix
#include <stdio.h>
int main()
{
    int Matrix[2][3] = {{1, 10, 2}, {10, 10, 10}};

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            int freq = 0;
            for (int k = 0; k < 2; k++)
            {
                for (int l = 0; l < 3; l++)
                {
                    if (Matrix[i][j] == Matrix[k][l])
                    {
                        freq++;
                    }
                }
            }
            printf("Frequency of %d = %d\n", Matrix[i][j], freq);
        }
    }

    return 0;
}
// Sum of Rows in Matrix (RECURSION)
#include <stdio.h>
int Summation(int i, int A[2][3]);
int main()
{
    int Matrix[2][3] = {{1, 2}, {3, 4, 5}};
    Summation(0, Matrix);
    return 0;
}
int Summation(int i, int A[2][3])
{
    if (i < 2)
    {
        int sum = 0;

        for (int j = 0; j < 3; j++)
        {
            sum += A[i][j];
        }
        printf("%d\n", sum);
        return Summation(i + 1, A);
    }
    return 0;
}
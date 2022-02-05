// Printing Matrix (RECURSION)
#include <stdio.h>
void Print(int i, int A[3][3]);
int main()
{   
    int Matrix[3][3] = {{1, 2, 3}, {4, 5, 6}};
    Print(0, Matrix);
    return 0;
}
void Print(int i, int A[3][3])
{
    if (i < 2)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ", A[i][j]);
        }
        return Print(i + 1, A);
    }
}
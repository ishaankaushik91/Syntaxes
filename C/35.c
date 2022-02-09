//  Finding Duplicates in Array (RECURSION)
#include <stdio.h>
int Duplicate(int i, int A[]);
int main()
{
    int A[8] = {1, 2, 3, 4, 5, 6, 5, 7};
    Duplicate(0, A);
    return 0;
}
int Duplicate(int i, int A[])
{
    if (i < 8)
    {
        for (int j = i + 1; j < 8; j++)
        {
            if (A[i] == A[j])
            {
                printf("%d has a duplicate at %d\n", A[i], j);
            }
        }
        return Duplicate(i + 1, A);
    }
    return 0;
}
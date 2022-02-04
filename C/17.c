// Finding Duplicates (RECURSION)
#include <stdio.h>
int Duplicate(int i, int A[], int j);
int main()
{
    int Arr[10] = {10, 11, 13, 15, 31, 14, 45, 22, 18, 19};
    printf("%d\n", Duplicate(0, Arr, 1));
    return 0;
}
int Duplicate(int i, int A[], int j)
{
    if (i < 10)
    {
        if (j < 10)
        {
            if (A[i] == A[j])
            {
                return A[i];
            }
            return Duplicate(i, A, j + 1);
        }
        return Duplicate(i + 1, A, j);
    }
    //return 0;
}
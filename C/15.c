// Sum of all elements of Array (RECURSION)
#include <stdio.h>
int Summation(int i, int A[]);
int main()
{
    int Array[5] = {10, 13, 14, 21, 11};
    printf("%d\n", Summation(0, Array));
    return 0;
}
int Summation(int i, int A[])
{
    if (i < 5)
    {
        return A[i] + Summation(i + 1, A);
    }
    return 0;
}
// Printing all elements of an Array (LOOP)
#include <stdio.h>
void P(int A[]);
int main()
{
    int Arr[8] = {1, 2, 3, 4, 5, 6, 7, 8};
    P(Arr);
    return 0;
}
void P(int A[])
{
    for (int i = 0; i < 8; i++)
    {
        printf("%d\t", A[i]);
    }
}
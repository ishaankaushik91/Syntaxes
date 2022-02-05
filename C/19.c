// Separating Odd & Even numbers in different Array (RECURSION)
#include <stdio.h>
void Change(int a, int od, int ev, int A[], int Odd[], int Even[]);
void Print(int i, int A[]);
int main()
{
    int Arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, Odd[5], Even[5];
    Change(0, 0, 0, Arr, Odd, Even);
    Print(0, Odd);
    printf("\n");
    Print(0, Even);
    return 0;
}
void Change(int a, int od, int ev, int A[], int Odd[], int Even[])
{
    if (a < 10)
    {
        if (A[a] % 2 == 0)
        {
            Even[ev] = A[a];
            return Change(a + 1, od, ev + 1, A, Odd, Even);
        }
        if (A[a] % 2 != 0)
        {
            Odd[od] = A[a];
            return Change(a + 1, od + 1, ev, A, Odd, Even);
        }
        return Change(a + 1, od, ev, A, Odd, Even);
    }
}
void Print(int i, int A[])
{
    if (i < 5)
    {
        printf("%d\t", A[i]);
        return Print(i + 1, A);
    }
}
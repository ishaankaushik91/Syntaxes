// Separating Odd & Even numbers in different Array (LOOP)
#include <stdio.h>
void Change(int A[], int Odd[], int Even[]);
int main()
{
    int Arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, Odd[5], Even[5];
    Change(Arr, Odd, Even);

    for (int i = 0; i < 5; i++)
    {
        printf("%d\t", Odd[i]);
    }
    printf("\n");
    for (int i = 0; i < 5; i++)
    {
        printf("%d\t", Even[i]);
    }
    return 0;
}
void Change(int A[], int Even[], int Odd[])
{
    int od = 0, ev = 0;
    for (int i = 0; i < 10; i++)
    {
        if (A[i] % 2 == 0)
        {
            Even[od] = A[i];
            od++;
        }
        else
        {
            Odd[ev] = A[i];
            ev++;
        }
    }
}
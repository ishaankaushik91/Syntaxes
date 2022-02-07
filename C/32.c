// Inserting element at given index in Array (RECURSION)
#include <stdio.h>
int Insert(int i, int Arr[]);
int main()
{
    int Arr[8] = {0, 2, 5, 3, 1, 9, 8, 11};
    int num = 112;
    Insert(8, Arr);
    Arr[2] = num;
    for (int i = 0; i < 9; i++)
    {
        printf("%d\t", Arr[i]);
    }
    return 0;
}
int Insert(int i, int Arr[])
{
    if (i >= 2)
    {
        Arr[i + 1] = Arr[i];
        return Insert(i - 1, Arr);
    }
    return 0;
}
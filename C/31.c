// Inserting element at given index in Array (LOOP)
#include <stdio.h>
int main()
{
    int Arr[8] = {0, 2, 5, 3, 1, 9, 8, 11};
    int num = 112;

    for (int i = 8 - 1; i >= 2; i--)
    {
        Arr[i + 1] = Arr[i];
    }
    Arr[2] = num;
    printf("\n");
    for (int i = 0; i < 9; i++)
    {
        printf("%d\t", Arr[i]);
    }

    return 0;
}
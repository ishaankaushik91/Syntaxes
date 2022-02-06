// Printing all unique elements in Array (RECURSION)
#include <stdlib.h>
#include <stdio.h>
int Unique(int index, int Arr[]);
int main()
{
    int Arr[10];

    for (int i = 0; i < 10; i++)
    {
        Arr[i] = rand() % 50;
        printf("%d\t", Arr[i]);
    }
    printf("\n");
    Unique(0, Arr);
    return 0;
}
int Unique(int index, int Arr[])
{
    if (index < 10)
    {
        int check = 1;
        for (int j = 0; j < 10; j++)
        {
            if (Arr[index] == Arr[j])
            {
                check = 0;
                break;
            }
        }
        if (check)
        {
            printf("%d\t", Arr[index]);
            return Unique(index + 1, Arr);
        }
        return Unique(index + 1, Arr);
    }
    return 0;
}
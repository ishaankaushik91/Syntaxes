// Printing all unique elements in Array (LOOP)
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int Arr[100];
    for (int i = 0; i < 10; i++)
    {
        Arr[i] = rand() % 100;
        printf("%d\t", Arr[i]);
    }
    printf("\n");
    for (int i = 0; i < 10; i++)
    {
        int check = 1;
        for (int j = i + 1; j < 10; j++)
        {
            if (Arr[i] == Arr[j])
            {
                check = 0;
                break;
            }
        }
        if (check)
        {
            printf("%d\n", Arr[i]);
        }
    }
    return 0;
}
// Finding frequency of each element in Array (LOOP)
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int Arr[10];
    for (int i = 0; i < 10; i++)
    {
        Arr[i] = rand() % 50;
    }

    for (int i = 0; i < 10; i++)
    {
        int Frequency = 0;
        for (int j = 0; j < 10; j++)
        {
            if (Arr[i] == Arr[j])
            {
                Frequency++;
            }
        }
        printf("Frequency of %d = %d\n", Arr[i], Frequency);
    }

    return 0;
}
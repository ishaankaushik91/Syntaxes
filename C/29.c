// Finding frequency of each element in Array (RECURSION)
#include <stdlib.h>
#include <stdio.h>
int Frequency(int i, int A[]);
int main()
{
    int Arr[10];

    for (int i = 0; i < 10; i++)
    {
        Arr[i] = rand() % 50;
    }
    Frequency(0, Arr);
    return 0;
}
int Frequency(int i, int A[])
{
    if (i < 10)
    {
        int Freq = 0;

        for (int j = 0; j < 10; j++)
        {
            if (A[i] == A[j])
            {
                Freq++;
            }
        }
        printf("Frequency of %d = %d\n", A[i], Freq);
        return Frequency(i + 1, A);
    }
    return 0;
}
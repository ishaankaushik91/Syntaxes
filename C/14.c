// Sum of all elements of Array (LOOP)
#include <stdio.h>
int Summation(int Arr[]);
int main()
{
    int Array[5] = {10, 13, 14, 21, 11};
    printf("%d\n", Summation(Array));
    return 0;
}
int Summation(int Arr[])
{
    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        sum += Arr[i];
    }
    return sum;
}
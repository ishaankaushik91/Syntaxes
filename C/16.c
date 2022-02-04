// Finding Duplicates (LOOP)
#include <stdio.h>
int Duplicate(int Arr[]);
int main()
{
    int Arr[10] = {10, 11, 13, 15, 18, 14, 45, 22, 18, 19};
    printf("%d\n", Duplicate(Arr));
    return 0;
}
int Duplicate(int Arr[])
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = i + 1; j < 10; j++)
        {
            if (Arr[i] == Arr[j])
            {
                return Arr[i];
            }
        }
    }
    return 0;
}
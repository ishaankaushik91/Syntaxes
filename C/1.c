// Printing Pattern (LOOP)
#include <stdio.h>
void Pyramid();
int main()
{
    Pyramid();
    return 0;
}
void Pyramid()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}
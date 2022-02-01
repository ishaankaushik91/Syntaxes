let a = 1;

while (a <= 10)
{
    setTimeout(() => {
        console.log(a);
    }, 2000)
    a++;
}
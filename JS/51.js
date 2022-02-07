function Pro(num)
{
    let check = 1;
    return new Promise((resolve, reject) => {
        for (let i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                check = 0;
                break;
            }

            if (check)
            {
                resolve(num + "is Prime");
            }
            else
            {
                reject(num, "composite");
            }
        }
    })
}

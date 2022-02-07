function haveFun(num)
{
    return new Promise((resolve, reject) => {
        if (num <= 100)
        {
            setTimeout(() => {
                resolve("I am coming out after 5 secs.")
            }, 5000);
        }
        else
        {
            reject("Rejected!");
        }
    })
}

haveFun(10000)
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err)
})
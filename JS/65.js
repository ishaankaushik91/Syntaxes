async function abc(num1, num2)
{
    return new Promise((resolve, reject) => {
        if (num1 < num2)
        {
            resolve(`${num2} is greater`);
        }
        else
        {
            reject(`${num1} is smalller`);
        }
    })
}

try {
    let Response = await abc(10, 1)
    console.log(Response);
} catch (error) {
    console.log(error);
}
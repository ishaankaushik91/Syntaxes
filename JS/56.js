function abc(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 < num2) {
            resolve(`${num1} is less than  ${num2}`);
        } else if (num1 > num2) {
            resolve(`${num2} is less than  ${num1}`);
        } else {
            reject("Both are equal");
        }
    })
}
async function main() {
    try {
        var res = await abc(5,5);
        console.log(res);
    } catch (error) {
        console.log("I m going to catch");
        console.log(error);
    }
}
main();
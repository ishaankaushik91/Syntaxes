// Summation of all elements in Matrix (LOOP)
let Yo = {
    Matrix: [[1, 2, 3], [3, 4, 5]]
}

let sum = 0;

Yo.Matrix.forEach((OneD) => {
    OneD.forEach((nums) => {
        sum += nums;
    })
})
console.log(sum);
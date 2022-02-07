// Sum of left diagonals of a matrix (LOOP)
let Matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 10]
];

let sum = 0;

for (let i = 0; i < 3; i++)
{
    for (let j = 0; j < 3; j++)
    {
        if (i == j)
        {
            sum += Matrix[i][j];
        }
    }
}
console.log(sum);
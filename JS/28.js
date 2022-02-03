let Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Half = [];
let Matrix = [];

for (let i = 0; i < Data.length; i++) {
  if (i < Data.length / 2) {
    Matrix.push(Data[i]);
  } else {
    Half.push(Data[i]);
  }
}
Matrix.push(Half);
console.log(Matrix);

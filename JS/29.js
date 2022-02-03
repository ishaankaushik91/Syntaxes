let Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Half = [];
let Matrix = [];

TwoD(0, Data, Half, Matrix);

function TwoD(i, Data_Set, Ha, Mat) {
  if (i < Data_Set.length) {
    if (i < Data_Set.length / 2) {
      Mat.push(Data_Set[i]);
      return TwoD(i + 1, Data_Set, Ha, Mat);
    } else {
      Ha.push(Data_Set[i]);
      return TwoD(i + 1, Data_Set, Ha, Mat);
    }
    return TwoD(i + 1, Data_Set, Ha, Mat);
  }
  Mat.push(Ha);
  console.log(Mat);
}

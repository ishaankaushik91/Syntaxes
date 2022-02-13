// Storing elements in Array & printing them (RECURSION);
let Arr = [];

StoreAndPrint(0, Arr);

function StoreAndPrint(index, array) {
  if (index < 10) {
    array[index] = index;
    console.log(array[index]);
    return StoreAndPrint(index + 1, array);
  }
  return 0;
}

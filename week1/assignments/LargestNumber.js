function findLargestNum(arr) {
  let largest = -123456789;
  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  return largest;
}

let ans = findLargestNum([1, 5, 7, 3, 9]);
console.log(ans);

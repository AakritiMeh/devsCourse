//map function

const arr = [1, 2, 3, 4];
function transform(i) {
  return i * 2;
}

console.log(arr.map(transform));

//arrow function
let ans = (a, b) => {
  return a + b;
};

//filter
function filterLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(arr.filter(filterLogic));

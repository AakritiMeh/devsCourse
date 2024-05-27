function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  let val1 = square(a);
  let val2 = square(b);
  return val1 + val2;
}

function sumOfCubes(a, b) {
  return cube(a) + cube(b);
}

//the arg can be a function also
function giveResult(a, b, f1, f2) {
  console.log(f1);
  console.log(f2);
  console.log(f1(a, b));
  console.log(f2(a, b));
}

giveResult(2, 3, sumOfSquares, sumOfCubes);

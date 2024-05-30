let c = 0;
function counter() {
  console.log(c);
  c++;
  setTimeout(counter, 1000);
}
counter();

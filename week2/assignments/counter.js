let count = 0;
function counter() {
  setInterval(() => {
    console.log(count);
    count++;
  }, 1000);
}

counter();

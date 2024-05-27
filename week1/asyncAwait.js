//easier and pettier code , but still uses promises and callback
function AsyncFn() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hemloo");
    }, 10000);
  });
  return p;
}

async function main() {
  let val = await AsyncFn();
  console.log(val);
}

main();

const fs = require("fs");
function readFile() {
  let p = new Promise((res) => {
    let read = fs.readFile("a.txt", "utf-8", (err, data) => {
      res(data);
    });
  });
  return p;
}

function done(data) {
  console.log(data);
}

readFile().then(done);

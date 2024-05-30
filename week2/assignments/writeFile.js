const fs = require("fs");
function writeFile() {
  let p = new Promise((res) => {
    fs.writeFile("a.txt", "dfgfhjduifuiyerb", (err, data) => {
      if (err) {
        return "error occured";
      } else {
        console.log("file contents written successfully \n");
        fs.readFile("a.txt", "utf-8", (err, data) => {
          res(data);
        });
      }
    });
  });
  return p;
}

function done(data) {
  console.log(data);
}

writeFile().then(done);

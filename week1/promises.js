// promises=syntactical sugar , makes code slightly more readable
//but under the hood still uses callback functions

//better way to write a function to read a file

// const fs = require("fs");
// function ReadFile() {
//   console.log("inside readfile");
//   return new Promise(function (res) {
//     console.log("inside promise");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("inside readfile and bfr resolve");
//       res(data);
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// ReadFile().then(onDone);

// //the above code is still internally async

// let a = 0;
// for (let i = 0; i < 10; i++) {
//   a++;
// }
// console.log(a);

//promised => pending, resolved, rejected

var d = new Promise(function (res) {
  setTimeout(function () {
    res("hemlo");
  }, 10000);
});

function cb() {
  console.log(d);
}
console.log(d);
d.then(cb);

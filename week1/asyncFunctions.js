// example -1
// console.log("example-1");
// const fs = require("fs"); //filesystem module

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// }); //this runs asynchronously

// console.log("hello");
// //while the file was being read, the next command was being executed and then as the file got read, the data from the file will be printed
// let a = 0;
// for (let i = 0; i < 10000000; i++) {
//   a++;
// }
// console.log("for loop done");
// //even if the async function has read everything, since the thread was busy the task will be completed and then go back to the async function

// console.log("hello2");

console.log("exaple-2");

// example-2

console.log("hello1");
setTimeout(function () {
  console.log("inside async");
}, 10000);
let b = 0;
for (let i = 0; i < 10; i++) {
  b = b + 1;
}
console.log(b);
console.log("hello2");

//callback functions are more needed in async functions

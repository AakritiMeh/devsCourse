const currDate = new Date();
console.log(currDate.getDate());
console.log(currDate.getMonth() + 1); //bcz of zero indexing
console.log(currDate.getFullYear());

// .getHours()
// .getMinutes()
// .getSeconds()
// .setFullYear(year)
// .setMonth(monthNumber)
// .getTime()

console.log(currDate.getTime()); //time in milliseconds since 1970
// epoch timestamp

function currTimePrint() {
  console.log(new Date().getTime());
}

setInterval(currTimePrint, 1000);

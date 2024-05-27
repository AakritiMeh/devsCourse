function getLength(str) {
  console.log("Original string: " + str);
  console.log("length: " + str.length);
}

getLength("aakriti");

function findIndexOf(str1, str2) {
  console.log(str1.indexOf(str2));
  console.log(str1.lastIndexOf(str2));
}

findIndexOf("hello am am", "am");

console.log("helloWorld".slice(0, 3)); //starts from 0 and ends before 3, i.e till idx 2

console.log("helloWorld".substring(1, 3));

console.log("helloam".replace("he", "eh"));
console.log("hello aakriti ansh aakriti".split(" "));
console.log("      am     ".trim());

console.log("am".toUpperCase());
console.log("Am".toLowerCase());

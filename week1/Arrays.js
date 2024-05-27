arr = [1, 2, 3, 4];
arr.pop();
arr.shift(); //pops from front
console.log(arr);

arr.unshift(1); //puts value given within bracket from the front
arr.push(5); //puts value within bracket from the back;

console.log(arr);
arr1 = [8, 9, 10];
let arr3 = arr.concat(arr1);
console.log(arr3);

//iterating thru array using forEach
//callback functions

function logThing(str) {
  console.log(str);
}
//arr3.foreach(logthing);  ==>same as below
arr3.forEach((str) => {
  console.log(str);
});

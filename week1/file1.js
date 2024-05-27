var a = 1;
console.log(a);

const users1 = {
  name: "am",
  gender: "fem",
};

const allUsers = [
  { firstName: "am", gen: "fem" },
  { firstName: "as", gen: "ma" },
];

console.log(users1["name"]);
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gen"] == "ma") {
    console.log(allUsers[i]["firstName"]);
  }
}

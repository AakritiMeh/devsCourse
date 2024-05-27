const users = '{"name":"am","gender":"female"}';

//JSON.parse()
//JSON.stringify();

const user = JSON.parse(users);

console.log(user["name"]);

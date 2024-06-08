const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const jwtPassword = "123456789";

const allUsers = [
  {
    uname: "am",
    pass: "1234",
    userKaname: "aakriti",
  },
  {
    uname: "as",
    pass: "1235",
    userKaname: "ansh",
  },
];

function userExists(uname, pass) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].uname == uname && allUsers[i].pass == pass) {
      return true;
    }
  }
  return false;
}

app.post("/signIn", (req, res) => {
  const uname = req.body.uname;
  const pass = req.body.pass;
  if (!userExists(uname, pass)) {
    return res.status(403).json({
      msg: "user doesnt exist",
    });
  }

  var token = jwt.sign({ uname: uname }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const uname = decoded.uname;
    res.json({
      users: allUsers,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000);

//

const { User } = require("../db");
function userMiddleware(req, res, next) {
  const uname = req.headers.username;
  const passwd = req.headers.password;
  User.findOne({
    username: uname,
    password: passwd,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({ msg: "User not found" });
    }
  });
}

module.exports = userMiddleware;

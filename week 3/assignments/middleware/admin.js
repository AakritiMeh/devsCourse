const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  const uname = req.headers.username;
  const passwd = req.headers.password;
  Admin.findOne({
    username: uname,
    password: passwd,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({ msg: "admin not found" });
    }
  });
}

module.exports = adminMiddleware;

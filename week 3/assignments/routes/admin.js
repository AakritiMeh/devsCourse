const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post("/signup", (req, res) => {
  const uname = req.body.username;
  const pass = req.body.password;
  Admin.create({
    username: uname,
    password: pass,
  })
    .then(function (value) {
      if (value) {
        res.json({ msg: "admin created successfully" });
        next();
      }
    })
    .catch((err) => console.log(err));
});

router.post("/courses", adminMiddleware, (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  Course.create({
    title,
    description,
    price,
    imageLink,
  })
    .then((value) => {
      if (value) {
        res.status(200).json({
          msg: "course successfully created, course Id is: " + value._id,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({ mag: "course could not be created" });
    });
});

router.get("/courses", adminMiddleware, (req, res) => {
  Course.find({}).then((resp) => {
    res.json({
      courses: resp,
    });
  });
});

module.exports = router;

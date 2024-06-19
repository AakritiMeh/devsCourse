const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  const uname = req.body.username;
  const pass = req.body.password;
  User.create({
    username: uname,
    password: pass,
  })
    .then(function (value) {
      if (value) {
        res.json({ msg: "user created successfully" });
        next();
      }
    })
    .catch((err) => console.log(err));
});

router.get("/courses", (req, res) => {
  Course.find({}).then((resp) => {
    res.json({
      courses: resp,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  const cid = req.params.courseId;
  const uname = req.headers.username;
  User.updateOne(
    {
      username: uname,
    },
    {
      $push: { purchasedCourses: cid },
    }
  )
    .then(() =>
      res.status(200).json({ msg: "congo you hav purchased the course" })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(403)
        .json({ msg: "sorry we could not add the course to your purchases" });
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({ username: req.headers.username });
  console.log(user.purchasedCourses);
  const c = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(200).json({
    courses: c,
  });
  //   User.findOne({
  //     username: username,
  //   }).then((resp) => {
  //     res.json({
  //       msg: Course.find({ courseId: { $in: resp.purchasedCourses } }),
  //     });
  //   });
});

module.exports = router;

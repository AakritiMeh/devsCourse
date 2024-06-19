const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aakritimehrotra2022:AAKRITI%408oct@cluster0.gnp0cxr.mongodb.net/newDb?retryWrites=true&w=majority&appName=Cluster0/"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const AdminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { collection: "admins" }
);

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { collection: "user" }
);

const CourseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    imageLink: String,
  },
  { collection: "courses" }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};

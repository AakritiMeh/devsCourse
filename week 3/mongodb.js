const express = require("express");

const jwt = require("jsonwebtoken");
const jwtPassword = "123456789";
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    passwd: String,
  },
  { collection: "users" }
); // Specify collection name

const User = mongoose.model("User", userSchema);

const user = new User({
  name: "aakriti",
  email: "aakriti@gmail.com",
  passwd: "12345",
});

user
  .save()
  .then(() => {
    console.log("saved");
  })
  .catch((err) => {
    console.log("not saved");
  });

//  uname- aakritimehrotra2022  passwd - AAKRITI@8oct

//mongodb+srv:aakritimehrotra2022:AAKRITI@8oct@cluster0.qmt1szv.mongodb.net/

// mongodb+srv://aakritimehrotra2022:AAKRITI%408oct@cluster0.gnp0cxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/

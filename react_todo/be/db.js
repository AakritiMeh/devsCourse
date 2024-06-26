const mongoose = require("mongoose");
const { boolean } = require("zod");

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

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: Boolean,
  },
  { collection: "todos" }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = {
  Todo,
};

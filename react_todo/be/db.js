const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose
  .connect(MONGOURI)
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

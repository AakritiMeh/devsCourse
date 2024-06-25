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

const Task = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: boolean,
  },
  { collection: "todos" }
);

module.exports = {
  Task,
};

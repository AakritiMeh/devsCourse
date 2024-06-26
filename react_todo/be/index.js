const express = require("express");
const jwt = require("jsonwebtoken");
const { createToDo, updateToDo } = require("./types");
const app = express();
const { Todo } = require("./db");
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedpayLoad = createToDo.safeParse(createPayLoad);
  if (!parsedpayLoad.success) {
    res.status(411).json({
      msg: "you sent wrong inputs",
    });
    return;
  }
  const taskCreated = await Todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  if (taskCreated) {
    res.status(200).json({
      msg: "todo created",
    });
  }
});

app.get("/todos", async function (req, res) {
  const todos = await Todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsedpayload = updateToDo.safeParse(updatePayLoad);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "wrong inputs in updating",
    });
    return;
  }
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "marked as done",
  });
});

app.listen(3000);

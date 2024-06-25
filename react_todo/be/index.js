const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateToDo } = require("./types");
const app = express();
const { Task } = require("./db");
app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedpayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedpayLoad.success) {
    res.status(411).json({
      msg: "you sent wrong inputs",
    });
    return;
  }
  const taskCreated = await Task.create({
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
  const todos = await todo.find({});
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
  await Task.update(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "marked as done",
  });
});

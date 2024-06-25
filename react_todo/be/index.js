const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});

const express = require("express");
const zod = require("zod");
const schema = zod.array(zod.number());
const app = express();
app.use(express.json());

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/login", (req, res) => {
  const resp = validateInput(req.body);

  if (!resp.success) {
    res.json({
      msg: "invalid input",
    });
  } else {
    res.json({
      msg: "success",
    });
  }
});

app.post("/healthCheckup", function (req, res) {
  const kidney = req.body.kidney;
  const resp = schema.safeParse(kidney);
  if (!resp.success) {
    res.status(411).json({
      msg: "invalid input",
    });
  } else {
    res.send({
      resp,
    });
  }
  // const kidneyLength = kidney.length;
  // res.send("you hav " + kidneyLength + " kidneys");
});

let errCount = 0;
app.use(function (err, req, res, next) {
  errCount++;
  res.json({
    msg: "sorry something is up with our server",
  });
});
app.listen(3000);

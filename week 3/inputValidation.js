const express = require("express");
const app = express();
app.use(express.json());
app.post("/healthCheckup", function (req, res) {
  const kidney = req.body.kidney;
  const kidneyLength = kidney.length;
  res.send("you hav " + kidneyLength + " kidneys");
});

//global catches - these r special type of middlewares which have 4 arguments
//anytime ther is an exection this will be  called
let errCount = 0;
app.use(function (err, req, res, next) {
  errCount++;
  res.json({
    msg: "sorry something is up with our server",
  });
});
app.listen(3000);

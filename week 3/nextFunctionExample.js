const express = require("express");
const app = express();
app.use(express.json()); //this in itself returns a function
let request = 0;
function calcRequestCunt(req, res, next) {
  request++;
  console.log(request);
  next();
}
app.use(calcRequestCunt);
app.get(
  "/",
  (req, res, next) => {
    console.log("function1");
    next();
  },
  (req, res, next) => {
    console.log("function 2");
    res.send("hemloo");
    next();
  }
);
app.post("/checkup", function (req, res) {
  res.json({
    msg: "hello",
  });
});

app.listen(3000);

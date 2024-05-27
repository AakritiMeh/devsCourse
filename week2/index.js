//

const express = require("express");
const bp = require("body-parser");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//body-parser:
app.use(bodyParser.json());

app.get("/route-handler", function (req, res) {
  res.json({
    name: "am",
    age: 19,
  });
});
app.post("/", (req, res) => {
  let a = 0;
  console.log(req.body.message);

  res.send("<b>hello aakriti<b>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/conversations", (req, res) => {
  console.log(req.body.message);
  res.send({
    msg: "2+2=4",
  });
});

app.get("/mas", (req, res) => {
  console.log("hello");
  res.send("hello");
});

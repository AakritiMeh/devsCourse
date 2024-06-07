const express = require("express");
const app = express();
app.get("/", function (req, res) {
  const uname = req.headers.uname;
  const passwd = req.headers.passwd;
  const kidneyId = Number(req.query.kidneyId);

  if (uname != "am" || passwd != "aakriti") {
    res.status(400).json({ msg: "wrong uname or passwd" });
    return;
  }

  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(400).json({ msg: "wrong input" });
    return;
  }
  res.json({
    msg: "kidney is fine",
  });
});

app.listen(3000);

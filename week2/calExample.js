const express = require("express");
function calcSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();
app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calcSum(n);
  res.sendStatus(ans);
});

app.listen(3000);

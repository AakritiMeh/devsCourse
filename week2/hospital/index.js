var users = [
  {
    name: "am",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
  const amKidneys = users[0].kidneys;
  const noOfKidneys = amKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < amKidneys.length; i++) {
    if (amKidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({ noOfKidneys, noOfHealthyKidneys, noOfUnhealthyKidneys });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({ msg: "Done !" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        atLeastOneUnhealthyKidney = true;
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.json({
      msg: "no unhealthy kidney",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  }
  return atLeastOneUnhealthyKidney;
}
app.listen(3000);

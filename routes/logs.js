const express = require("express");
const DAL = require("../DAL");
const router = express.Router();

router.get("/", (req, res) => {
  DAL.getLog({}).then(data => {
    res.send(data);
  });
});

router.get("/:step", (req, res) => {
  DAL.getLog({ step: req.params.step }).then(data => {
    res.send(data);
  });
});

router.delete("/all", (req, res) => {
  DAL.deleteAllLogs().then(data => {
    res.send(data);
  });
});

module.exports = router;

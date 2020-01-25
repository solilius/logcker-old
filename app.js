// ########################################### //
// ############### - Logcker - ############### //
// ########################################### //
const express = require("express");
const mongoose = require("mongoose");
const logs = require("./routes/logs");
const BL = require("./BL");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + '/public'));

app.use("/logs", logs);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index/index.html");
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.use((err, req, res, next) => {
  console.error("Handled", err);
  res.status(500).send("Something went wrong");
});

// ############# Start Server ############### //

mongoose.connect(require('./config').DB_URI).then(() => {
    app.listen(port, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("Server is up, Port: " + port);
        BL.connectToDocker();
      }
    });
  },
  err => {
    console.error("DB Connections", err);
  }
);

const express = require("express");
const app = express();

const driver = require("./src/driver.js");
const controller = require("./src/controller.js");

app.get("/", function (req, res) {
  controller.all(driver.session())((records) => {
    res.send(JSON.stringify(records.map((r) => r.toObject())));
  });
});

app.listen(3000, () => console.info("Visit: http://localhost:3000"));

// close the driver when the process exists
process.on("exit", async () => await driver.close());

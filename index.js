const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Execute/mongodb/router");
const routers = require("./Execute/mongoose/router");
const logger = require("morgan");
const path = require("path");
const BodyParser = require("body-parser");
const db = require("./config/mongoose");

app.use(BodyParser.json()); // for parsing application/json
app.use(BodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(cors());
app.use(routers);
app.use(logger("dev"));
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + " NotFound",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

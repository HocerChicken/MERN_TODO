require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todosRoute = require("./routes/todosRoute");
const Cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(Cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/todos", todosRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to DB & listening on port 5000!!!");
    });
  })
  .catch((err) => {
    console.error(err);
  });

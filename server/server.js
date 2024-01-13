require("dotenv").config();
const express = require("express");
const todosRoute = require("./routes/todosRoute");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/todos", todosRoute);

app.listen(process.env.PORT, () => {
  console.log("listening on port 5000!!!");
});

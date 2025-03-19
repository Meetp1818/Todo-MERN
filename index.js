const express = require("express");
const todoroutes = require("./routes/Todo");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/todos", todoroutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port  5000");
});

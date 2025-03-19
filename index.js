const express = require("express");
const todoroutes = require("./routes/Todo");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/todos", todoroutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port  5000");
});

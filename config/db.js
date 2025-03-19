const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://meet:meet1234@meet.ej730.mongodb.net/todo",
      {}
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

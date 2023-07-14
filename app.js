const express = require("express");
const app = express();
const movies = require("./routes/movies");
const connectDB = require("./DB/connect");
require("dotenv").config();

//port address
const port = 5000;

//middlewares
app.use(express.json());
app.use("/api/movies", movies);

const start = async () => {
  try {
    await connectDB(process.env.mongo_uri);
    app.listen(port, console.log(`This server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

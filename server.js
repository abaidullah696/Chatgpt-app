const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

//routes path
const authRoutes = require("./routes/authRoutes");

//dotenv config
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // handles JSON request body
app.use(express.urlencoded({ extended: false })); // handles URL-encoded request body
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

//AI routes
app.use("/api/v1/auth", authRoutes);

//listen server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});

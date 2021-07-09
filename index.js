const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//initalize dotenv
const dotenv = require("dotenv").config();

//mongodb configg
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology:true }, () => {
  console.log("DB Connected");
});

//Middleware start here
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Define routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


// Server initalize here
app.listen(process.env.port, () => {
  console.log(`Backend server is running port number ${process.env.port}`);
});

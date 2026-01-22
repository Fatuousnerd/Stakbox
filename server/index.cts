import { MongooseError } from "mongoose";

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//Import Routes
//Import Routes

const allowedOrigins = ["*"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

const MongoURI = `${process.env.MONGO_URI}${process.env.MONGO_DB}`;

mongoose
  .connect(MongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: MongooseError) =>
    console.error(`Error connecting to MongoDB: ${err}`)
  );

//Use Routes
app.use("/api/");
//Use Routes

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

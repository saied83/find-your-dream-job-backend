import express from "express";
import dotenv from "dotenv";
import jobRoute from "./routes/job.route.js";
import { db } from "./db/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/jobs", jobRoute);

app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

db.query("SELECT 1")
  .then(() => {
    // mysql
    console.log("MySQL DB connected");
    // listener
    app.listen(PORT, () => {
      console.log(`Running Server on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

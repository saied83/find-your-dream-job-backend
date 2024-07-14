import express from "express";
import dotenv from "dotenv";
import jobRoute from "./routes/job.route.js";
import db from "./db/db.js";
import cors from "cors";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/", jobRoute);
app.use(cors(corsOptions));

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

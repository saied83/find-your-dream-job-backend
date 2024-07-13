import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json("Hellow World");
});
app.listen(PORT, () => {
  console.log("Server Run on ", PORT);
});

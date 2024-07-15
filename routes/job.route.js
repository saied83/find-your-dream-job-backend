import express from "express";
import {
  createJob,
  editJob,
  getJobs,
  getSingleJob,
  deleteJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getSingleJob);

router.post("/create", createJob);

router.put("/edit/:id", editJob);

router.delete("/delete/:id", deleteJob);

export default router;

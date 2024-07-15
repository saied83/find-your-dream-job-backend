import express from "express";
import { getJobs, getSingleJob } from "../controllers/job.controller.js";

const router = express.Router();

router.get("/jobs", getJobs);

router.get("/jobs/:id", getSingleJob);

export default router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { addJob, listJobs, updateJob, deleteJob } = require("../controllers/jobsController");

router.post("/", auth, addJob);
router.get("/", auth, listJobs);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);

module.exports = router;

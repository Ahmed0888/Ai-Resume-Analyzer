const Job = require("../models/job");

const addJob = async (req, res) => {
  try {
    const data = req.body;
    const job = await Job.create({ ...data, userId: req.user.id });
    res.json({ success: true, job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const listJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findOneAndUpdate({ _id: id, userId: req.user.id }, req.body, { new: true });
    res.json({ success: true, job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    await Job.deleteOne({ _id: id, userId: req.user.id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addJob, listJobs, updateJob, deleteJob };

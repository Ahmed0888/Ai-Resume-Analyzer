const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  company: { type: String },
  position: { type: String },
  jobDescription: { type: String },
  appliedDate: { type: Date },
  status: { type: String, enum: ["Applied","Interviewing","Rejected","Offered"], default: "Applied" },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);

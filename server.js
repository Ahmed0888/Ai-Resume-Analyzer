// // server/server.js
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const fileUpload = require("express-fileupload");
// const connectDB = require("./config/db");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } })); // 10 MB
// app.use("/", express.static(path.join(__dirname, "../public")));

// // connect DB
// const MONGO_URI = process.env.MONGO_URI;
// if (MONGO_URI) {
//   connectDB(MONGO_URI).catch(err => {
//     console.error("DB connection failed", err);
//   });
// } else {
//   console.warn("MONGO_URI not set - DB features will fail");
// }

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/resume", require("./routes/resumeRoutes"));
// app.use("/api/jobs", require("./routes/jobsRoutes"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } })); // 10 MB
// 1) Static root
app.use("/", express.static(path.join(__dirname, "../public")));

// 2) Subfolders (sirf folder ka path)
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/login', express.static(path.join(__dirname, '../public/login')));
app.use('/register', express.static(path.join(__dirname, '../public/register')));
app.use('/analyzer', express.static(path.join(__dirname, '../public/analyzer')));
app.use('/jobs', express.static(path.join(__dirname, '../public/jobs')));
app.use('/dashboard', express.static(path.join(__dirname, '../public/dashboard')));
app.use('/resumes', express.static(path.join(__dirname, '../public/resumes')));



// connect DB
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  connectDB(MONGO_URI).catch(err => console.error("DB connection failed", err));
} else {
  console.warn("MONGO_URI not set - DB features will fail");
}

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/resume", require("./routes/resumeRoutes"));
app.use("/api/jobs", require("./routes/jobsRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));

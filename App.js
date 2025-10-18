// app.js
// Simple Express server for Klaus Investment Backend

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection (MongoDB)
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// simple test route
app.get("/", (req, res) => {
  res.send("Klaus Investment Backend is running successfully ✅");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

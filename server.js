import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB Atlas Connection
const uri = "mongodb+srv://layljandee:layl@apptdb.pghmc.mongodb.net/appt?retryWrites=true&w=majority"; // Correctly targets the appt database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example Schema and Model (for Doctors collection)
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schedule: { type: [String], required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema, "Doctors"); // Explicitly specify collection name

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Fetch all doctors
app.get("/api/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Add a new doctor
app.post("/api/doctors", async (req, res) => {
  try {
    const { name, schedule } = req.body;
    const newDoctor = new Doctor({ name, schedule });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: "Bad Request", error: err.message });
  }
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

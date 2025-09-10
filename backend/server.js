const express =require("express");

const mongoose=require("mongoose");

const cors=require("cors");

require("dotenv").config();

const app=express();

app.use(cors());

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDB is connected"))
.catch(err =>console.log("MongoDB connection error:",err));

app.get("/", (req, res) => {
  res.send("Hello from Backend with Admin & User Roles 🚀");
});

// 6. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
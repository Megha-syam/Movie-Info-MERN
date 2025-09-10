const mongoose = require("mongoose");

// Define schema for users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // no two users with same email
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"], // only 2 roles allowed
    default: "user"
  }
}, { timestamps: true });

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;

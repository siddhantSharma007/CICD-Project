// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://siddhantsharma770:12345@cluster0.s803mhg.mongodb.net/', {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Failed to connect to MongoDB", err);
});

// Mongoose schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone:String
});

const User = mongoose.model('user', UserSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password ,phone} = req.body;
    const user = new User({ name, email, password,phone });
    await user.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

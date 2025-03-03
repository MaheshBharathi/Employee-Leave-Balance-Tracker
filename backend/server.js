// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/users', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String
// });
// const User = mongoose.model('User', userSchema);

// // User Signup Route
// app.post('/users/signup', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Hash password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ name, email, password: hashedPassword });

//         await newUser.save();
//         res.status(201).json({ message: "Signup successful! Please log in." });

//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong", error });
//     }
// });

// // User Login Route
// // app.post('/users/login', async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         const user = await User.findOne({ email });

// //         if (!user) {
// //             return res.status(400).json({ message: "User not found" });
// //         }

// //         // Compare passwords
// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) {
// //             return res.status(400).json({ message: "Invalid credentials" });
// //         }

// //         // Generate JWT token
// //         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// //         res.json({ message: "Login successful", token });

// //     } catch (error) {
// //         res.status(500).json({ message: "Something went wrong", error });
// //     }
// // });

// // Start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

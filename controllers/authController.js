const { registerUser, loginUser } = require('../models/userModel');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await registerUser(name, email, password);
        console.log("User registered:", user); // Tambahkan logging ini
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error("Error during registration:", error); // Tambahkan logging ini
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        const token = generateToken(user);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
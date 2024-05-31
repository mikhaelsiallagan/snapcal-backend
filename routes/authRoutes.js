const express = require('express');
const { register, login, logout, deleteAccount } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.delete('/delete-account', authMiddleware, deleteAccount);

module.exports = router;

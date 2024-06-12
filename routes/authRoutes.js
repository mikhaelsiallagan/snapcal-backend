const express = require('express');
const { register, login, logout, deleteAccount, resetPassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.send('Hello World!');
});

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.delete('/delete-account', authMiddleware, deleteAccount);
router.put('/reset-password', authMiddleware, resetPassword);

module.exports = router;

const express = require('express');
const { getProfileDetails, updateProfileDetails } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile-details', authMiddleware, getProfileDetails);
router.put('/profile-details', authMiddleware, updateProfileDetails);

module.exports = router;
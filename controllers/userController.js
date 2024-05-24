exports.getProfile = (req, res) => {
    res.status(200).json({
        message: 'Profile data retrieved successfully',
        user: req.user
    });
};



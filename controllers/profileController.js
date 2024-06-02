const db = require('../db/firestore');

const getProfileDetails = async (req, res) => {
    const { email } = req.user;

    try {
        const userRef = db.collection('users').doc(email);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(400).json({
                status: "fail",
                message: "Failed to Get Profile"
            });
        }

        const userData = userDoc.data();
        // Exclude the password from the response
        const { password, updatedAt, createdAt, token, ...userWithoutSensitiveInfo } = userData;

        return res.status(201).json({
            status: "successful",
            message: "User get profile success",
            userId: userData.userId,
            data: userWithoutSensitiveInfo
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};


const updateProfileDetails = async (req, res) => {
    const { email } = req.user;
    const updatedData = req.body.data;

    try {
        const userRef = db.collection('users').doc(email);
        await userRef.update(Object.assign(updatedData, { updatedAt: new Date() }));

        const userDoc = await userRef.get();
        const userData = userDoc.data();

        return res.status(201).json({
            status: "successful",
            message: "User update profile success",
            userId: userData.userId,
            data: userData
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    getProfileDetails,
    updateProfileDetails
};
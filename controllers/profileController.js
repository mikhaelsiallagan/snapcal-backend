const { Storage } = require('@google-cloud/storage');
const db = require('../db/firestore');
const path = require('path');
const fs = require('fs');

const storage = new Storage({
    keyFilename: path.join(__dirname, '../dummy-be-snapcal-bucket.json'), 
    projectId: 'dummy-be-snapcal'
});
const bucketName = 'snapcal-storage-dummy'; 

const uploadPhoto = async (req, res) => {
    const { email } = req.user; 

    if (!req.file) {
        return res.status(400).json({
            status: "fail",
            message: "No file uploaded"
        });
    }

    const filePath = req.file.path;
    const fileName = `${Date.now()}_${req.file.originalname}`;
    const destFileName = `profile-pict/${email}/${fileName}`;

    try {
        await storage.bucket(bucketName).upload(filePath, {
            destination: destFileName
        });

        const publicUrl = `https://storage.googleapis.com/${bucketName}/${destFileName}`;

        const userRef = db.collection('users').doc(email);
        await userRef.update({
            gambar_profil: publicUrl,
            updatedAt: new Date()
        });

        fs.unlinkSync(filePath); 

        return res.status(201).json({
            status: "successful",
            message: "Profile photo uploaded successfully",
            photoUrl: publicUrl
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

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
    updateProfileDetails,
    uploadPhoto
};
const { verifyToken } = require('../utils/jwtUtils');
const db = require('../db/firestore');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(400).json({
            status: "fail",
            message: "No token provided"
        });
    }

    try {
        const decoded = verifyToken(token);
        const userRef = db.collection('users').doc(decoded.email);
        const userDoc = await userRef.get();

        if (!userDoc.exists || userDoc.data().token.auth !== token) {
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized"
            });
        }

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

module.exports = authMiddleware;

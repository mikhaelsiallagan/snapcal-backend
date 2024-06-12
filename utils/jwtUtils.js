const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const generateToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: expired });
};

const verifyToken = (token) => {
    return jwt.verify(token, secret);
};

module.exports = {
    generateToken,
    verifyToken
};

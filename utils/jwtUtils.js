const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}

exports.generateToken = (user) => {
    return jwt.sign({ id: user.email }, secret, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    return jwt.verify(token, secret);
};
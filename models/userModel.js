const firestore = require('../databases/firestore');
const bcrypt = require('bcrypt');

const userCollection = firestore.collection('users');


exports.registerUser = async (nama, email, password) => {
    const userDoc = await userCollection.doc(email).get();
    if (userDoc.exists) {
        throw new Error('Email already registered');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { nama, email, password: hashedPassword };
    await userCollection.doc(email).set(user);
    return user;
};

exports.loginUser = async (email, password) => {
    const userDoc = await userCollection.doc(email).get();
    if (!userDoc.exists) {
        throw new Error('User not found');
    }
    const user = userDoc.data();
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }
    return user;
};
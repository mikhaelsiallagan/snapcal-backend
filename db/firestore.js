const key_db = require('../dummy-be-snapcal-firebase.json')
const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(key_db)
})

const db = admin.firestore();

module.exports = db
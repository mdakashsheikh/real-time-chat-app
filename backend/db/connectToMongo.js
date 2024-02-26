const mongoose = require('mongoose');

const connetToMongo = async() => {

    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URL)
        console.log('Connect to Database')

    } catch (error) {
        console.log('Error connection to MongoDB', error.message);
    }
}

module.exports = connetToMongo
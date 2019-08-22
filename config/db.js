const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log('Mongo database connecting…')
    } catch(err) {
        console.log(err.message);
        // exit process upon failure
        process.exit(1);
    }
}

module.exports = connectDB;
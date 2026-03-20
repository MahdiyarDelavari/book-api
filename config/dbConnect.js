const mongoose = require('mongoose');
require('dotenv');
const connectDB = async () => {
    try {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {
            console.log("MongoDB Connected");
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
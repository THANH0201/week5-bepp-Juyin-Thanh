const mongoose = require("mongoose");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    const conn = await mongoose.connect("mongodb://localhost:27017/week5-bepp1");
=======
    const conn = await mongoose.connect(process.env.MONGO_URI);
>>>>>>> 1b7c6ab23f1af2f0239cc5da246bc0b1f6a90ce0
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
 
module.exports = connectDB;

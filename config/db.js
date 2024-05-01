import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error connecting to Mongodb", error);
  }
};

export default connectDB;

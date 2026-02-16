import mongoose from "mongoose";
const uri = process.env.DB_URL

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://promarkdatabase:promarkdatabase%401234@promarkdb.zfwjisc.mongodb.net/My_Test_Data");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDb Not Connected");
  }
};
export default dbconnect
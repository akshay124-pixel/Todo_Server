import mongoose from "mongoose";
const newUser = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type:String
    }
})

const User = mongoose.model("users",newUser)
export default User

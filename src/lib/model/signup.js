import mongoose from "mongoose";

const signupModel = new mongoose.Schema({
    userName:String,
    userEmail:String,
    userPassword:String,
    userPhoneno:String
});

export const Signupschema = mongoose.models.userdetails || mongoose.model("userdetails", signupModel);  
import mongoose from "mongoose";

const animenameModel = new mongoose.Schema({
    animeName:String,
    imageUrl:String
});

export const AnimeName = mongoose.models.animenames || mongoose.model("animenames", animenameModel);
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({},{timestamps:true})

export const video = mongoose.model("Video",videoSchema)
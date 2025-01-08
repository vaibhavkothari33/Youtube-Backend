import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:String,
        required:true,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:[{
        type:Schema.Types.ObjectId,
        ref:"User",
    }]
},{timestamps:true})

export const video = mongoose.model("Video",videoSchema)
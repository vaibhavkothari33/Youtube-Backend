import mongoose, { Schema, Types } from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    // kis ne subscribe keya 
    subscriber:{   
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    // kisko subscribe keya
    channel:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export const Subscription = mongoose.model("Subscription",subscriptionSchema);

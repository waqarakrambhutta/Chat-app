import mongoose, { mongo } from "mongoose";

const conversationSchema = mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }]
})
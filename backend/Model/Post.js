import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
    Type: { type: String, required: true},
    Title: { type: String, required: true},
    Content: { type: String, required: true },
    Views:{type:Number,default:0,},
    SubmitedBy:{type:mongoose.Schema.ObjectId,ref:"User"},
},{timestamps:true});
const Post=mongoose.model("Post",PostSchema);
export default Post;
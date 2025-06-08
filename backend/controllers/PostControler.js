import express from "express";
import Post from "../Model/Post.js";
const addpost=async(req,res)=>{
        const {topic,tag,content,userid}=req.body;
        const newpost=await Post.create({Type:tag,Title:topic,Content:content,SubmitedBy:userid,Views:0});
        if(newpost){

            res.status(201).send({
                success:true,
                topic:newpost.Title,
                tag:newpost.Title,
                content:newpost.Content,
                Likes:newpost.Likes,
                PostedBy:newpost.SubmitedBy
            })
        }else{
            res.status(401).send("Error in Post creation")
        }
}
const editpost=async (req,res)=>{
try {
    const postId = req.params.id;
    const updateData = req.body; // Expect the edited fields in request body
    console.log(updateData);
    const updatedPost = await Post.findByIdAndUpdate(postId, {Type:updateData.tag,Content:updateData.content,Title:updateData.topic,SubmitedBy:updateData.userid}, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    console.log(updatedPost);
    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Server error updating post' });
  }
}
const deletepost=async (req,res)=>{
try {
    const postId = req.params.id;

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server error deleting post' });
  }
}
const updateviews = async (req, res) => {
  const id = req.params.id;

  try {
    const requiredpost = await Post.findById(id);

    if (!requiredpost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const views = requiredpost.Views + 1;

    const updatedpost = await Post.findByIdAndUpdate(
      id,
      { Views: views },
      { new: true }
    );
    console.log(updatedpost);
    res.status(200).json({ message: 'Post updated successfully', post: updatedpost });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Server error updating post views' });
  }
};

const getposts=async (req,res)=>{
        const allposts=await Post.find({});
        if(allposts){
            res.status(201).send(allposts);
        }else{
            res.status(401).send("Error in fetching Post")
        }
}

export {addpost,getposts,editpost,deletepost,updateviews};
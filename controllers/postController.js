const { default: mongoose } = require("mongoose");
const PostModel = require("../models/Post");


const createPost = async (req,res) =>{
      try {
      const userId = req.user._id ; // it comes from jwt verify by auth.js 

      const {title, content} = req.body;
      const image = req.file.filename;

      console.log(title);
      console.log(image);
      console.log(content);
      
      
      const createPost = new PostModel({
                                        title:title.toUpperCase(),
                                        photo:image,
                                        content:content.charAt(0).toUpperCase() + content.slice(1),
                                        userId:userId.charAt(0).toUpperCase() + userId.slice(1)
                                      });

      await createPost.save();

      res.status(201)
            .json({
                message: "Post Created",
                success: true
        })
      } catch (error) {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
      }
}

const deletePost = async(req,res) => {
  const {postId} = req.body;
  console.log(postId);
  
  const _id = mongoose.Types.ObjectId.createFromHexString(postId);
  try {

  const response = await PostModel.deleteOne({_id: _id});

  if(response){
    res.status(201)
            .json({
                message: "Post Deleted",
                success: true
        })
  }

  } catch (error) {
    res.status(500)
    .json({
        message: "Internal Server Error",
        success: false
       })
  }
  
}

module.exports = {createPost, deletePost};
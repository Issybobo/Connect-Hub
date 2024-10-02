const Post=require("../models/Post")
const User=require("../models/User")
const {CustomError}=require("../middlewares/error")

// create post controller
const createPostController=async(req,res,next)=>{

    const {userId,caption}=req.body
    try{
        // find the user by id
       const user=await User.findById(userId)
       // if user not found throw an error
       if(!user){
        throw new CustomError("User not found!",404)
       }
       // create a new post
       const newPost=new Post({
        user:userId,
        caption
       })
       // save the post
       await newPost.save()
       // push the post to the user's posts
       user.posts.push(newPost._id)
       // save the user posts
       await user.save()
       // send the response for the client
       res.status(201).json({message:"Post created successfully!",post:newPost})
    }
    catch(error){
        next(error)
    }

}

const generateFileUrl=(filename)=>{
    return process.env.URL+`/uploads/${filename}`
}

const createPostWithImagesController=async(req,res,next)=>{
    const {userId}=req.params
    const {caption}=req.body
    const files=req.files

    try{
        const user=await User.findById(userId)
       if(!user){
        throw new CustomError("User not found!",404)
       }
       const imageUrls=files.map(file=>generateFileUrl(file.filename))
       const newPost=new Post({
        user:userId,
        caption,
        image:imageUrls
       })

       await newPost.save()
       user.posts.push(newPost._id)
       await user.save()
       res.status(201).json({message:"Post created successfully!",post:newPost})

    }
    catch(error){
        next(error)
    }

}



const updatePostController=async(req,res,next)=>{
    const {postId}=req.params
    const {caption}=req.body
    try{
        // find the post by id
        const postToUpdate=await Post.findById(postId)
        if(!postToUpdate){
            throw new CustomError("Post not found!",404)
        }

        // update the post
        const updatedPost = await Post.findByIdAndUpdate(
            // find the post by id
            postId,

            {caption},
            // return the updated post
            { new: true }
          );

        // await postToUpdate.save()
        res.status(200).json({message:"Post updated successfully!",post:updatedPost})

    }
    catch(error){
        next(error)
    }
}

const getPostsController=async(req,res,next)=>{
    const {userId}=req.params
    try{
        const user=await User.findById(userId)
        if(!user){
            throw new CustomError("User not found!",404)
        }
        // get the blocked user ids
        const blockedUserIds=user.blockList.map(id=>id.toString())
        // get the posts of the users that are not in the blocked user ids
        const allPosts=await Post.find({user:{$nin:blockedUserIds}}).populate("user","username fullName profilePicture")

        res.status(200).json({posts:allPosts})

    }
    catch(error){
        next(error)
    }
}

const getUserPostsController=async(req,res,next)=>{
    const {userId}=req.params
    try{
        const user=await User.findById(userId)
        if(!user){
            throw new CustomError("User not found!",404)
        }

        const userPosts=await Post.find({user:userId})

        res.status(200).json({posts:userPosts})

    }
    catch(error){
        next(error)
    }
}

const deletePostController=async (req,res,next)=>{
    // get the post id from the params
    const {postId}=req.params
    try{
        // find the post by id
        const postToDelete=await Post.findById(postId)
        // if post not found throw an error
        if(!postToDelete){
            throw new CustomError("Post not found!",404)
        }
        // find the user by id
        const user=await User.findById(postToDelete.user)
        // if user not found throw an error
        if(!user){
            throw new CustomError("User not found!",404)
        }
        // remove the post from the user's posts if it exists con 
        user.posts=user.posts.filter(postId=>postId.toString()!==postToDelete._id.toString())
        // save the user posts
        await user.save()
        // delete the post
        await postToDelete.deleteOne()
        // delete the comments of the post
        await Comment.deleteMany({post:postId})

        res.status(200).json({message:"Post deleted successfully!"})

    }
    catch(error){
        next(error)
    }
}

const likePostController=async(req,res,next)=>{
    const {postId}=req.params
    const {userId}=req.body
    try{
        const post=await Post.findById(postId)
        if(!post){
            throw new CustomError("Post not found!",404)
        }
        const user=await User.findById(userId)
        if(!user){
            throw new CustomError("User not found!",404)
        }
        // check if the user has already liked the post
        if(post.likes.includes(userId)){
            throw new CustomError("You have already liked this post!",404)
        }
        // push the user id to the post likes
        post.likes.push(userId)
        // save the post
        await post.save()
        // send the response for the client
        res.status(200).json({message:"Post liked successfully!",post})
    }
    catch(error){
        next(error)
    }
}

const dislikePostController=async(req,res,next)=>{
    const {postId}=req.params
    const {userId}=req.body
    try{
        const post=await Post.findById(postId)
        if(!post){
            throw new CustomError("Post not found!",404)
        }
        const user=await User.findById(userId)
        if(!user){
            throw new CustomError("User not found!",404)
        }
        // check if the user has already liked the post
        if(!post.likes.includes(userId)){
            throw new CustomError("You have not liked the post!",404)
        }
        
        post.likes=post.likes.filter(id=>id.toString()!==userId)
        // save the post
        await post.save()
        // send the response for the client
        res.status(200).json({message:"Post disliked successfully!",post})
    }
    catch(error){
        next(error)
    }
}



module.exports={createPostController,createPostWithImagesController,
    updatePostController,getPostsController,
    getUserPostsController,deletePostController,
    likePostController,dislikePostController}
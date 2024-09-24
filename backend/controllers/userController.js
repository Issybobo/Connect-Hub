const express = require("express");
const { CustomError } = require("../middlewares/error");
const User = require("../models/User");

const getUserController = async (req, res, next) => {
    try {
        // id of the user to get
        const userId = req.params.userId;
        // get the user from the database
        const user = await User.findById(userId);

        // check if the user exists
        if (!user) {
            throw new CustomError("User not found!", 404);
        }

        // send the user as a response
        res.status(200).json(user);
        
    } catch (error) {
        
        console.error("Error in getUserController:", error); // Log the error
        next(error);
    }
};

// Update user controller
const updateUserController = async (req, res, next) => {
    try {
        // user id to update
        const userId = req.params.userId;
        const { password, ...rest } = req.body; // Exclude password from the update
       
        //update the user in the database
        const updatedUser = await User.findByIdAndUpdate(userId, rest, { new: true });
      
        // check if the user exists
        if (!updatedUser) {
            throw new CustomError("User not found!", 404);
        }

        // send the updated user as a response
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error in updateUserController:", error); // Log the error
        next(error);
    }
};

// follow user controller
const followUserController=async(req,res,next)=>{

   

    try{

         // id of the user to follow
    const {userId}=req.params 

    // id of the logged in user
    const {_id}=req.body 

        //check if the user is trying to follow himself
        if(userId===_id){ 
            throw new CustomError("You can not follow yourself",500)
        }

        // find the user to follow and the logged in user
        const userToFollow=await User.findById(userId)
        const loggedInUser=await User.findById(_id)


        // check if the user to follow and the logged in user exist
        if(!userToFollow || !loggedInUser){
            console.log("User to follow:", userToFollow);
            console.log("Logged-in user:", loggedInUser);
            throw new CustomError("User not found!",404)
        }

        // check if the logged in user is already following the user to follow
        if(loggedInUser.following.includes(userId)){
            throw new CustomError("Already following this user!",400)
        }

        // add the user to follow to the logged in user's following list
        loggedInUser.following.push(userId)

        // add the logged in user to the user to follow's followers list
        userToFollow.followers.push(_id)

        // save the changes to the database
        await loggedInUser.save()
        await userToFollow.save()

        // send a success response

        res.status(200).json({message:"Successfully followed user!"})

    }
    catch(error){
        next(error)
    }
}


const unfollowUserController=async(req,res,next)=>{
    //userId of the user to unfollow
    const {userId}=req.params
    //id of the logged in user
    const {_id}=req.body

    try{
        //check if the user is trying to unfollow himself
        if(userId===_id){
            throw new CustomError("You can not unfollow yourself",500)
        }

        //find the user to unfollow and the logged in user
        const userToUnfollow=await User.findById(userId)
        const loggedInUser=await User.findById(_id)

      

        //check if the user to unfollow and the logged in user exist
        if(!userToUnfollow || !loggedInUser){
            throw new CustomError("User not found!",404)
        }

        //check if the logged in user is following the user to unfollow
        if(!loggedInUser.following.includes(userId)){
            throw new CustomError("Not following this user",400)
        }

        //remove the user to unfollow from the logged in user's following list
        loggedInUser.following=loggedInUser.following.filter(id=>id.toString()!==userId)

        //remove the logged in user from the user to unfollow's followers list
        userToUnfollow.followers=userToUnfollow.followers.filter(id=>id.toString()!==_id)

        //save the changes to the database
        await loggedInUser.save()
        await userToUnfollow.save()

        res.status(200).json({message:"Successfully unfollowed user!"})

    }
    catch(error){
        next(error)
    }
}


        
// block user controller
const blockUserController=async (req,res,next)=>{
    //userId of the user to block
    const {userId}=req.params
    //id of the logged in user
    const {_id}=req.body
    try{
        //check if the user is trying to block himself
        if(userId===_id){
            throw new CustomError("You can not block yourself",500)
        }

        //find the user to block and the logged in user
        const userToBlock=await User.findById(userId)
        const loggedInUser=await User.findById(_id)

        //check if the user to block and the logged in user exist
        if(!userToBlock || !loggedInUser){
            throw new CustomError("User not found!",404)
        }

        //check if the logged in user is already blocking the user to block
        if(loggedInUser.blockList.includes(userId)){
            throw new CustomError("This user is already blocked!",400)
        }

        //add the user to block to the logged in user's block list
        loggedInUser.blockList.push(userId)

        //remove the user to block from the logged in user's following list
        loggedInUser.following=loggedInUser.following.filter(id=>id.toString()!==userId)

        //remove the logged in user from the user to block's followers list
        userToBlock.followers=userToBlock.followers.filter(id=>id.toString()!==_id)

        //save the changes to the database
        await loggedInUser.save()
        await userToBlock.save()

        //send a success response
        res.status(200).json({message:"Successfully blocked user!"})

    }
    catch(error){
        next(error)
    }
}


// unblock user controller
const unblockUserController=async(req,res,next)=>{
    
    try{
        //userId of the user to unblock
    const {userId}=req.params
    //id of the logged in user
    const {_id}=req.body

        //check if the user is trying to unblock himself
        if(userId===_id){
            throw new CustomError("You can not unblock yourself",500)
        }

        //find the user to unblock and the logged in user
        const userToUnblock=await User.findById(userId)
        const loggedInUser=await User.findById(_id)

        //check if the user to unblock and the logged in user exist
        if(!userToUnblock || !loggedInUser){
            throw new CustomError("User not found!",404)
        }

        //check if the user to unblock is already blocked
        if(!loggedInUser.blockList.includes(userId)){
            throw new CustomError("Not blocking is user!",400)
        }

        //remove the user to unblock from the logged in user's block list
        loggedInUser.blockList=loggedInUser.blockList.filter(id=>id.toString()!=userId)

        //save the changes to the database
        await loggedInUser.save()
        
        res.status(200).json({message:"Successfully unblocked user!"})

    }
    catch(error){
        next(error)
    }
}

    

module.exports = { getUserController, updateUserController, followUserController,unfollowUserController,blockUserController,unblockUserController };
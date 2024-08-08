const express= require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User")

// Register a new user
router.post("/register", async(req, res) => {
    try{
        const {password, username, email } = req.body
        //check if user already exists 
        const existingUser = await User.findOne({$or: [{username}, {email}]})
        if(existingUser){
            return res.status(400).json({msg: "User already exists"})
        }
        //hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({...req.body, password: hashedPassword})
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json({error: err.message})
    }
   
})

// Login
router.post("/login", async (req, res) => {
    try{
        let user;
        if(req.body.email){
            user = await User.findOne ({email: req.body.email})
        }
        else{
            user = await User.findOne({username: req.body.username})
        }

        if(!user){
            return res.status(400).json({
                messgae: "User not found!"
            })
        }
//compare password in the database with the password the user is trying to login with
        const match = await bcrypt.compare(req.body.password, user.password)

        //if passwords don't match
        if(!match){
            return res.status(400).json({
                msg: "Invalid credentials!"
            })
        }
 //if passwords match
        res.status(200).json({
            msg: "Login successful!"
        })

        

    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
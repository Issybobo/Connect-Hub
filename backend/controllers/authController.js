const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { CustomError } = require("../middlewares/error"); // Correct import

const registerController = async (req, res, next) => {
    try {
        const { password, username, email } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            throw new CustomError("User or email already exists!", 400);
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = new User({ ...req.body, password: hashedPassword });
        const savedUser = await newUser.save();

        // Respond with the saved user
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error in registerController:", error); // Log the error
        next(error);
    }
};

const loginContoller = async (req, res, next) => {
    try {
        let user;

        // Find user by email or username
        if (req.body.email) {
            user = await User.findOne({ email: req.body.email });
        } else {
            user = await User.findOne({ username: req.body.username });
        }

        // If user not found
        if (!user) {
            throw new CustomError("User not found!", 404);
        }

        // Compare password in the database with the password the user is trying to login with
        const match = await bcrypt.compare(req.body.password, user.password);

        // If passwords don't match
        if (!match) {
            throw new CustomError("Invalid credentials!", 401);
        }

        // Remove password from the user object and create a token
        const { password, ...data } = user._doc;
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

        // Send the token in a cookie and respond with user data
        res.cookie("token", token).json(data);
    } catch (error) {
        console.error("Error in loginContoller:", error); // Log the error
        next(error);
    }
};

const logoutController = async (req, res, next) => {
    try {
        // Clear the token cookie and send a message to the user
        res.clearCookie("token", { sameSite: "strict", httpOnly: true });
        res.status(200).json({ msg: "Logout successful!" });
    } catch (error) {
        console.error("Error in logoutController:", error); // Log the error
        next(error);
    }
};

const refetchController = async (req, res, next) => {
    // Get the token from the cookies
    const token = req.cookies.token;

    // Verify the token using JWT
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
        // Log the token data for debugging purposes
        console.log(data);

        // If there's an error verifying the token, return a 404 status with the error
        if (err) {
            throw new CustomError(err, 401);
        }

        try {
            // Extract the user ID from the token payload
            const id = data._id;

            // Find the user in the database using the extracted ID
            const user = await User.findOne({ _id: id });

            // If the user is found, return the user data with a 200 status
            res.status(200).json(user);
        } catch (error) {
            console.error("Error in refetchController:", error); // Log the error
            next(error);
        }
    });
};

module.exports = { registerController, loginContoller, logoutController, refetchController };

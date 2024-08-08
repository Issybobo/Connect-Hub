// Middleware function to handle errors
const errorHandler = (err, req, res, next) => {
    // Log the error stack trace to the console for debugging
    console.error(err.stack);

    // Check if the error is an instance of CustomError
    if (err instanceof CustomError) {
        // If it is, send a response with the custom status and message
        res.status(err.status).json({ message: err.message });
    } else {
        // If it is not, send a generic 500 Internal Server Error response
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Custom error class that extends the built-in Error class
class CustomError extends Error {
    constructor(message, status) {
        // Call the parent class (Error) constructor with the message
        super(message);

        // Set the name property to the name of this class
        this.name = this.constructor.name;

        // Set the status property to the provided status code
        this.status = status;

        // Capture the stack trace, excluding the constructor call from it
        Error.captureStackTrace(this, this.constructor);
    }
}

// Export the errorHandler middleware and CustomError class
module.exports = { errorHandler, CustomError };
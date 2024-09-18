import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    OTP: {
        type: String
    },
    OTPExpiration: {
        type: Number,
    },
    isVerified: {
        type: Boolean
    }
})

export const userModel = mongoose.model("User", userSchema);
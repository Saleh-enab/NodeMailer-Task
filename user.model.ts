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
        default: Date.now() + 24 * 60 * 60 * 1000,
    },
    isVerified: {
        type: Boolean
    }
})

export const userModel = mongoose.model("User", userSchema);
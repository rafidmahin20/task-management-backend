import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide your name!"],
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: [true, "user already exists"],
        validate: [validator.isEmail, "Please provide valid email"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide your phone number"],
    },
    password: {
        type: String,
        required: [true, "provide your password"],
        minLength: [6, "password must contain at least 6 characters"],
        maxLength: [32, "password cannot exceed 32 characters"],
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model("User", userSchema);
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errors.js";
import { User } from "../models/userSchema.js";
import cloudinary from "cloudinary";

export const register = catchAsyncErrors(async (req, res, next) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("User Avatar required", 400));
    }
    const { avatar } = req.files;
    const allowedFormats = [
        "image/png",
        "image/jpeg",
        "image/webp"
    ];
    if(!allowedFormats.includes(avatar.mimetype)) {
        return next(
            new ErrorHandler("Please provide avatar in png.jpg,webp format!", 400)
        );
    }
    const {name, email, phone, password} = req.body;
    if(!name || !email || !phone || !password) {
        return next(new ErrorHandler("Please Complete Full Form", 400));
    }
    let user = await User.findOne({email});
    if(user) {
        return next(new ErrorHandler("Already exists", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        avatar.tempFilePath
    );
    if(!cloudinaryResponse || cloudinary.error) {
        console.error(
            "Cloudinary error",
            cloudinaryResponse.error || "unknown cloudinary error"
        );
    }
    user = await User.create({
        name, email, phone, password, avatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
    });
    res.status(200).json({
        success: true,
        message: "User Registered",
    });
});
export const login = catchAsyncErrors((req, res, next) => {});
export const logout = catchAsyncErrors((req, res, next) => {});
export const myProfile = catchAsyncErrors((req, res, next) => {});
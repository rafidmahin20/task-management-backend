import app from './app.js';
import cloudinary from "cloudinary";

// const PORT = 4000;

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () =>{
    console.log(`Server listening on port: ${process.env.PORT}`);
});
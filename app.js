import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {dbConnection} from "./database/dbConnection.js";
import fileUpload from "express-fileupload";
import {errorMiddleware} from "./middlewares/errors.js";

const app = express();
dotenv.config({ path: "./config/.env"});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

dbConnection();

app.use(errorMiddleware);

export default app;
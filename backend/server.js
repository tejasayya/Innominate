import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import {v2 as cloudinary} from "cloudinary";



dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// middleware. What is a middleware? It is a function that has access to the request and response objects. It can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.
//Middleware functions can perform the following tasks:
//Execute any code.
//Make changes to the request and the response objects.
//End the request-response cycle.
//Call the next middleware function in the stack.
//If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

app.use(express.json()); // To parse the incoming request req.body with JSON payloads
app.use(express.urlencoded({ extended: true })); // To parse the incoming request with urlencoded payloads
app.use(cookieParser()); // To parse the incoming cookies


// routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));



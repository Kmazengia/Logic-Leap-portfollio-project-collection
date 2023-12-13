import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

// middleware for parse request body (app.use(express.json());)
app.use(express.json());

// Middle ware for handling cors policy
//option 1: allow all origin with default of cors
//app.use(cors());
//option 2: allow custom origins
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the MERN stack tutorial");
    });
app.use("/books", booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`Connected to MongoDB`);
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

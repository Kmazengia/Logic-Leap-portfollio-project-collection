import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodel.js";
import { router } from "./routes/booksRoute.js"

const app = express();

// middleware for parse request body (app.use(express.json());)
app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the MERN stack tutorial");
    });
app.use("/books", router);
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

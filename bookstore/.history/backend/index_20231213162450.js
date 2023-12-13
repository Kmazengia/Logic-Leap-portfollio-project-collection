import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodel.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the MERN stack tutorial");
    });

// Route for saving a new book
app.post("/books", async (request, response) => {
    try {
        if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
        )
            {
                return response.status(400).send(
                    {
                    message:
                    "Please provide all required fields: title, author, publishYear",
                    }
                );
            }

        const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);
        response.status(201).json(book);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({ error: "Internal Server Error" });
    }
});

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

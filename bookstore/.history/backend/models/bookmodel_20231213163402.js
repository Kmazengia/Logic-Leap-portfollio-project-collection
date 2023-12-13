import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
        },
        publisherYear: {
            type: Number,
            require: true,
        },
    },
    {
        timestamp:true,
    }
    );

export const Book = mongoose.model('Book', BookSchema);
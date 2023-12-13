import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
        title: {
            type: string,
            require: true,
        },
        author: {
            type: string,
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

export const Book = mongoose.model('Book', { name: String });
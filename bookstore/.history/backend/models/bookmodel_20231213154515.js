import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
        title: {
            type: string,
            require: true,
        }
    }
    );

export const Book = mongoose.model('Book', { name: String });
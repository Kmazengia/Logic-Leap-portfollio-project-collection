import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {});

export const Book = mongoose.model('Book', { name: String });
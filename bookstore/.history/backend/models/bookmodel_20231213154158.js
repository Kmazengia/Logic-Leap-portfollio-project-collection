import mongoose from "mongoose";


export const const Book = mongoose.model('Book', { name: String });
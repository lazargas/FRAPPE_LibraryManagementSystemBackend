import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    bookID: String,
    title:String,
    authors:String,
    title: String,
    authors:String,
    average_rating:Number,
    isbn: String,
    isbn13:String,
    language_code:String,
    ratings_count:Number,
    text_reviews_count:Number,
    publication_date:Date,
    publisher:String,
    stock:Number,
    price:Number
});

export default model('Book', bookSchema);

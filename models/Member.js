import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
    name: String,
    email: String,
    joined_date: Date,
    outstanding_debt: Number,
    numberOfBooksIssued:Number,
    numberOfActiveBooks:Number,
    books:[{type: Schema.Types.ObjectId, ref: 'Book'}],
});

export default model('Member', memberSchema);

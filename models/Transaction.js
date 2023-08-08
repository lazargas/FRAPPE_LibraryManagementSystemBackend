import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
    transactionID:String,
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
    member: { type: Schema.Types.ObjectId, ref: 'Member' },
    issue_date: Date,
    return_date: Date,
    rent_fee: Number
});

export default model('Transaction', transactionSchema);

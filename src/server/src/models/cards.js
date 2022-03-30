import mongoose from 'mongoose';

const Card = mongoose.Schema({
    name: String,
    imageUrl: String
});

const cardSchema = mongoose.model('cards', Card);
export default cardSchema;
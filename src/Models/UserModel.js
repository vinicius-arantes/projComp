const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    title: String,
    description: String,
    price: Number
});

const UserModel = mongoose.model('products', UserSchema);

module.exports = UserModel;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    user_name: String,
    password: Number,
    email: String,
    description: String,
    avatar: String,
    bio: String,
    age: Number
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
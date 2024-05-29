const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    user_name: String,
    password: String,
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetExpires: {
        type: Date,
        select: false,
    },
    email: String,
    avatar: String,
    bio: String,
    age: Number
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
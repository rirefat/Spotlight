import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    bio: {type: String, required: true},
    email: {type: Email, required: true},
    phone: {type: Number, required: true},
    password: {type: Number, required: true},
});

export const userModel = mongoose.models.users ?? mongoose.model('users', userSchema);
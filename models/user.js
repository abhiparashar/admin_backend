const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            length: 32,
            unique: true,
            index: true,
            lowercase: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        role: {
            type: Number,
            trim: true
        },
        resetPasswordLink: {
            type: String,
            default: ""
        }
    }
);

module.exports = mongoose.model("User", userSchema);
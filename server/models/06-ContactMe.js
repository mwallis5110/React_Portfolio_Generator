const { Schema, model } = require("mongoose");


const contactMeSchema = new Schema({
    phone: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        match: [/.+@.+..+/, 'Must match an email address!'],
        trim: true,
    },
    linkedIn: {
        type: String,
        required: false,
        trim: true,
    },
    github: {
        type: String,
        required: false,
        trim: true,
    },
    twitter: {
        type: String,
        required: false,
        trim: true,
    },
    facebook: {
        type: String,
        required: false,
        trim: true,
    },
    instagram: {
        type: String,
        required: false,
        trim: true,
    },
});


const ContactMe = model("ContactMe", contactMeSchema);

module.exports = ContactMe;
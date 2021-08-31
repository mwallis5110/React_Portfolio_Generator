const { Schema, model } = require("mongoose");


const contactMeSchema = new Schema({
    username: {

    },
    email: {

    },
});



const ContactMe = model("ContactMe", contactMeSchema);

module.exports = ContactMe;
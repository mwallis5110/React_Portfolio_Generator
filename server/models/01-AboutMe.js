const { Schema, model } = require("mongoose");


const aboutMeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
});






const AboutMe = model("AboutMe", aboutMeSchema);

module.exports = AboutMe;
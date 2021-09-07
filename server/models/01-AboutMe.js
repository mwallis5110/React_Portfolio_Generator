const { Schema, model } = require("mongoose");

const aboutMeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
  },
  introduction: {
    type: String,
    required: false,
    trim: true,
  },
});

const AboutMe = model("AboutMe", aboutMeSchema);

module.exports = AboutMe;

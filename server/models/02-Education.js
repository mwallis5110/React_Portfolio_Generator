const { Schema, model } = require("mongoose");


const educationSchema = new Schema({
    institution: {
        type: String,
        required: true,
        trim: true,
    },
    degree: {
        type: String,
        required: false,
        trim: true,
    },
    graduationDate: {
        type: String,
        required: true,
        trim: true,
    },
  });
  
  
  
  
  const Education = model("Education", educationSchema);

  module.exports = Education;
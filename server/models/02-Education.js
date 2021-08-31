const { Schema, model } = require("mongoose");


const educationSchema = new Schema({
  username: {
    
  },
  email: {
    
  },
  });
  
  
  
  
  const Education = model("Education", educationSchema);

  module.exports = Education;
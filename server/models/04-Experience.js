const { Schema, model } = require("mongoose");


const experienceSchema = new Schema({
    jobTitle: {
        type: String,
        required: true,
        trim: true,
    },
    jobDescription: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
        trim: true,
    },
    endDate: {
        type: Date,
        required: false,
        trim: true,
    },
    achievements: {
        type: String,
        required: false,
        trim: true,
    },
    
});




const Experience = model("Experience", experienceSchema);

module.exports = Experience;
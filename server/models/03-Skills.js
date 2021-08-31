const { Schema, model } = require("mongoose");


const skillsSchema = new Schema({
    username: {

    },
    email: {

    },
});




const Skills = model("Skills", skillsSchema);

module.exports = Skills;
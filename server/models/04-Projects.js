const { Schema, model } = require("mongoose");


const projectSchema = new Schema({
    username: {

    },
    email: {

    },
});



const Projects = model("Project", projectSchema);

module.exports = Projects;
const { Schema, model } = require("mongoose");

const portfolioSchema = new Schema({
  AboutMe: {
    type: String,
    required: true,
    trim: true,
  },
  Education: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  Skills: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  Experience: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  Projects: [
      {
    type: String,
    required: false,
    trim: true,
  },
],
  ContactMe: {
    type: String,
    required: false,
    trim: true,
  }
});

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;

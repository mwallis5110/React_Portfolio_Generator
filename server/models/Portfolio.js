const { Schema, model } = require("mongoose");

const portfolioSchema = new Schema({
  AboutMe: {
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
    introduction: {
      type: String,
      required: false,
      trim: true,
    },
  },
  Education: [
    {
      institution: {
        type: Array,
        required: true,
        trim: true,
      },
      degree: {
        type: Array,
        required: false,
        trim: true,
      },
      graduationDate: {
        type: Array,
        required: false,
        trim: true,
      },
      // certification: {
      //     type: Array,
      //     required:false,
      //     trim: true,
      // }
    },
  ],
  Skills: {
    languages: {
        type: Array,
        required: false,
        trim: true,
    },
    programmingLanguages: {
      type: Array,
      required: false,
      trim: true,
    },
    hardSkills: {
      type: Array,
      required: false,
      trim: true,
    },
    softSkills: {
      type: Array,
      required: false,
      trim: true,
    },
  },

    Experience: [
      {
      jobTitle: {
          type: Array,
          required: false,
          trim: true,
      },
      jobDescription: {
          type: Array,
          required: false,
          trim: true,
      },
      startDate: {
          type: Date,
          required: false,
          trim: true,
      },
      endDate: {
          type: Date,
          required: false,
          trim: true,
      },
      achievements: {
          type: Array,
          required: false,
          trim: true,
      },
    }],

    Projects: [{
      title: {
          type: Array,
          required: true,
          trim: true,
      },
      description: {
          type: Array,
          required: true,
          trim: true,
      },
      images: {
          type: Array,
          required: true,
          trim: true,
      },
  //     link: {
  //         type: Array,
  //         required: true,
  //         trim: true,
  //     },
    }],

  ContactMe: {
    phoneNumber: {
      type: String,
      required: false,
      trim: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: [/.+@.+..+/, "Must match an email address!"],
    //   trim: true,
    // },
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
  },
  user: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  user_email:
  {
      type:String,
      required:true,
  }
});

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;

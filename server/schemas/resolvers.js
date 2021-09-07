const { AuthenticationError } = require("apollo-server-express");
const { User, Portfolio } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("Portfolio");
    },

    portfolio: async (parent, { PortfolioId }) => {
      return Portfolio.findOne({ _id: PortfolioId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPortfolio: async (parent, args, context) => {
      if (context.user) {
        const portfolio = await Portfolio.create({
          AboutMe: {
            firstName: args.firstName,
            lastName: args.lastName,
            introduction: args.introduction,
          },
          Education: {
            institution: args.institution,
            degree: args.degree,
            graduationDate: args.graduationDate,
          },
          Skills: {
            languages: args.languages,
            programmingLanguages: args.programmingLanguages,
            hardSkills: args.hardSkills,
            softSkills: args.softSkills,
          },
          Experience: {
            jobTitle: args.jobTitle,
            jobDescription: args.jobDescription,
            startDate: args.startDate,
            endDate: args.endDate,
            achievements: args.achievements,
          },
          Projects: {
            title: args.title,
            description: args.description,
            images: args.images,
            link: args.link,
          },
          ContactMe: {
            phoneNumber: args.phoneNumber,
            email: args.email,
            linkedIn: args.linkedIn,
            github: args.github,
            twitter: args.twitter,
            facebook: args.facebook,
            instagram: args.instagram,
          },
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { portfolio: portfolio._id } }
        );

        return portfolio;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
  // removePorfolio: async (parent, {  }, context) => {
  //     if (context.user) {
  //         const portfolio = await Portfolio.findOneAndDelete({
  //             _id: PortfolioId,
  //             username: context.user.username,
  //           });

  //           await User.findOneAndUpdate(
  //               { _id: context.user._id },
  //               { $pull: { portfolio: portfolio._id } }
  //             );

  //             return portfolio;
  //           }
  //           throw new AuthenticationError('You need to be logged in!');
  //         },
  //       },
  //     };
};
module.exports = resolvers;

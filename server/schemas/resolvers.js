const { AuthenticationError } = require('apollo-server-express');
const { User, Portfolio } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('Portfolio');
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Portfolio.find(params).sort({ createdAt: -1 });
    // },
    portfolio: async (parent, { PortfolioId }) => {
      return Portfolio.findOne({ _id: PortfolioId });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('thoughts');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPortfolio: async (parent, args, context) => {
      if (context.user) {
        const portfolio = await Portfolio.create({
          args,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { portfolio: portfolio._id } }
        );

        return portfolio;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //     addComment: async (parent, { thoughtId, commentText }, context) => {
    //       if (context.user) {
    //         return Thought.findOneAndUpdate(
    //           { _id: thoughtId },
    //           {
    //             $addToSet: {
    //               comments: { commentText, commentAuthor: context.user.username },
    //             },
    //           },
    //           {
    //             new: true,
    //             runValidators: true,
    //           }
    //         );
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
    //     removePorfolio: async (parent, { PortfolioId }, context) => {
    //       if (context.user) {
    //         const portfolio = await Portfolio.findOneAndDelete({
    //           _id: PortfolioId,
    //           thoughtAuthor: context.user.username,
    //         });

    //         await User.findOneAndUpdate(
    //           { _id: context.user._id },
    //           { $pull: { portfolio: Portfolio._id } }
    //         );

    //         return portfolio;
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
    // //     removeComment: async (parent, { thoughtId, commentId }, context) => {
    //       if (context.user) {
    //         return Thought.findOneAndUpdate(
    //           { _id: thoughtId },
    //           {
    //             $pull: {
    //               comments: {
    //                 _id: commentId,
    //                 commentAuthor: context.user.username,
    //               },
    //             },
    //           },
    //           { new: true }
    //         );
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
  },
};

module.exports = resolvers;

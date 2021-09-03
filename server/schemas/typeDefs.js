const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    Portfolio: String
  }

  type Portfolio {
    _id: ID
    portfolioText: String
    portfolioAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    portfolio(username: String, portfolioId: ID): Portfolio
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPortfolio(firstName: String!, lastName: String!, introduction: String!, insitution: [String], degree: [String], graduationDate: [String], certification: [String], languages: [String], programmingLanguages: [String], hardSkills: [String], softSkills: [String], jobTitle: [String], jobDescription: [String], startDate: String, endDate: String, achievements: [String], title: [String], description: [String], images: [String], link: [String], phoneNumber: String, email: String, linkedIn: String, github: String, twitter: String, facebook: String, instagram: String): Portfolio
  }
`;

module.exports = typeDefs;

//whenever you make the function work in resolvers, add this into mutations
// removePortfolio(portfolioId: ID!): Portfolio
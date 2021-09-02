const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    Portfolio: Portfolio!
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
    addPortfolio(portfolioText: String!): Portfolio
    removePortfolio(portfolioId: ID!): Portfolio
  }
`;

module.exports = typeDefs;
// type User {
//   _id: ID
//   username: String
//   email: String
//   password: String
// }

//   type AboutMe{
//     _id: ID
//     AboutMeText: String
//     createdAt: String
//   }

//   type Education{
//     _id: ID
//     EducationText: String
//     createdAt: String
//   }

//   type Skills{
//     _id: ID
//     SkillsText: String
//     createdAt: String
//   }

//   type Experience{
//     _id: ID
//     ExperienceText: String
//     createdAt: String
//   }

//   type Projects{
//     _id: ID
//     ProjectsText: String
//     createdAt: String
//   }

//   type ContactMe{
//     _id: ID
//     ContactMeText: String
//     createdAt: String
//   }

//   type Query {
//     users: [User]
//     user(username: String!): User
//     me: User
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     addThought(thoughtText: String!): Thought
//     addComment(thoughtId: ID!, commentText: String!): Thought
//     removeThought(thoughtId: ID!): Thought
//     removeComment(thoughtId: ID!, commentId: ID!): Thought
//   }
// `;


module.exports = typeDefs;

//addPortfolio(AboutMe: [firstName: String!, lastName: String!, introduction: String!]!
//, Education: [], Skills: [], Experience: [], Projects: [], ContactMe: []!): Portfolio

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const {Portfolio} = require('./models');
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/api/portfolio', (req, res) => {
  console.log(req.body)
  Portfolio.create(req.body).then(data => {res.json(data)}) 
})

app.get('/api/myPortfolio/:id', (req, res) => {
  Portfolio.find({user: req.params.id}).then (data => {res.json(data)})
})

app.get('/api/publicPortfolio/:email', (req, res) => {
  Portfolio.find({user_email: req.params.email}).then (data => {res.json(data)})
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

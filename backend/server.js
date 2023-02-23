const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const users = require("./db");
const schemaType = require("./schema");

const port = 3002;

//  schema
const schema = buildSchema(schemaType);

//  resolvers
const root = {
  users: () => users,
  user: ({ id }) => users.find((user) => user.id === id),
};

// express app
const app = express();
app.use(cors());

// graphql middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

// server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

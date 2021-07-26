
// We need to use the `buildSchema` method of
// graphql to create a schema object specific to
// our application
const { buildSchema } = require('graphql')

// TODO: Write our schema!
const schema = buildSchema(`
  type Contact {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
  }
  type Message {
    id: ID!
    author: Contact!
    recipient: Contact!
    content: String
  }
  type Query {
    messages: [Message!]!
    contacts(first_name: String): [Contact!]!
  }
`)

module.exports = schema

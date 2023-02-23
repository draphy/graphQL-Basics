const schemaType = `type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  
  type Geo {
    lat: String
    lng: String
  }
  
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
  
  type User {
    id: ID!
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  `;

module.exports = schemaType;

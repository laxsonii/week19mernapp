const typeDefs = `
  type Item {
    _id: ID
    name: String
    image: String
    cost: Int
    calories: Int
  }
    
  type Query {
    items: [Item]!
  }
`;

module.exports = typeDefs;


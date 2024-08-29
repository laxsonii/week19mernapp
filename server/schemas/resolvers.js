const { Item } = require('../models');

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    items: async () => {
      return Item.find();
    }
  }
  
};

module.exports = resolvers;

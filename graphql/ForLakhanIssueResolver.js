const resolvers = {
  Query: {
    getCreditUnion: (_, { id }) => {
      // Sample data
      const creditUnionSampleData = {
        id: "1",
        Contract_Number: "12345",
        Credit_Union_Name: "XYZ Credit Union",
        Premium_Reports: [],
        Premium_Adjustments: [],
        Single_Premium_Certificate_Returns: [],
      };
      return creditUnionSampleData.id === id ? creditUnionSampleData : null;
    }
  },
  Mutation: {
    addCreditUnion: (_, { input }) => {
      // Handle adding new Credit Union data
      return {
        id: "2",
        ...input
      };
    },
    updateCreditUnion: (_, { id, input }) => {
      // Handle updating a Credit Union by id
      if (id === "1") {
        return {
          id: "1",
          ...input
        };
      }
      return null;
    },
    deleteCreditUnion: (_, { id }) => {
      // Handle deletion of a Credit Union by id
      return id === "1";
    }
  }
};

export default resolvers;
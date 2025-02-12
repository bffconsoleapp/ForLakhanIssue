```
codegen-start
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input Credit_UnionInput {
    id: ID
    Contract_Number: String!
    Credit_Union_Name: String!
  }

  input Premium_ReportInput {
    id: ID
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Premium_AdjustmentInput {
    id: ID
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Single_Premium_Certificate_ReturnInput {
    id: ID
  }

  type Query {
    getCreditUnion(id: ID!): Credit_Union
  }

  type Mutation {
    addCreditUnion(input: Credit_UnionInput!): Credit_Union
    updateCreditUnion(id: ID!, input: Credit_UnionInput!): Credit_Union
    deleteCreditUnion(id: ID!): Boolean
  }
`;
codegen-end

codegen-start-resolver
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
codegen-end-resolver
```
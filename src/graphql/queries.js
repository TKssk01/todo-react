// 例: src/graphql/queries.js
export const listTodos = /* GraphQL */ `
  query ListTodos {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

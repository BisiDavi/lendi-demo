import ApolloClient from "apollo-boost";

const endpoint = "https://rickandmortyapi.com/graphql";

export const client: any = new ApolloClient({
  uri: endpoint,
});

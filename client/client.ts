import ApolloClient from "apollo-boost";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const client: any = new ApolloClient({
  uri: endpoint,
});

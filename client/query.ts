import gql from "graphql-tag";

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        gender
        image
        origin {
          name
        }
      }
    }
  }
`;

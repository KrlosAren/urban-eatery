import { gql } from '@apollo/client';

export const SEARCH_TERMS = gql`
  {
    business(id: "yelp-san-francisco") {
      name
      id
      coordinates {
        latitude
        longitude
      }
    }
  }
`;

export const SEARCH = gql`
  query find($query: String!, $location: String!) {
    search(term: $query, location: $location) {
      total
      business {
        id
        name
        rating
        phone
        photos
        display_phone
        review_count
        location {
          address1
          address2
          address3
          city
          state
          postal_code
          country
          formatted_address
        }
      }
    }
  }
`;

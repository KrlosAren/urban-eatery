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
  query find($search: String!, $location: String!) {
    search(term: $search, location: $location) {
      total
      business {
        id
        name
        rating
        phone
        photos
        price
        is_closed
        hours {
          is_open_now
          open {
            is_overnight
            end
            start
            day
          }
        }
        categories {
          title
          alias
        }
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
        reviews {
          id
          rating
          user {
            id
            image_url
            name
          }
          text
          time_created
        }
      }
    }
  }
`;

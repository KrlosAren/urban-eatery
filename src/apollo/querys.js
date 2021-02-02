import { gql } from '@apollo/client';

export const REVIEWS = gql`
  query find($business: String!) {
    reviews(business: $business, limit: 20) {
      review {
        id
        text
        rating
        user {
          id
          name
          image_url
        }
      }
    }
  }
`;

export const SEARCH = gql`
  query find($search: String!, $location: String!) {
    search(term: $search, location: $location, categories: "food") {
      total
      business {
        id
        alias
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

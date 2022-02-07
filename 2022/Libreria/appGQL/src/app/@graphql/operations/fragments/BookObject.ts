import { gql } from 'apollo-angular';

export const BOOK_OBJECT = gql`
  fragment BookObject on Book {
    id
    title
    isbn
    pageCount
    pageCount
    publishedDate
    thumbnailUrl
    shortDescription
    longDescription
    authors
    byPeoplesBuy  {
      id
      name
      email
    }
  }
`;

import { gql } from 'apollo-angular';

export const BOOK_OBJECT = gql`
  fragment BookObject on Book {
    id
    title
    isbn
    pageCount
    publishedDate
    thumbnailUrl
    shortDescription
    longDescription
    status
    authors
    byPeoplesBuy  {
      id
      name
      email
    }
  }
`;

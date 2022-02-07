import { gql } from 'apollo-angular';
import { BOOK_OBJECT } from '../fragments/BookObject';

export const GET_BOOKLIST = gql`
  query BookList($skip: Boolean!) {
    bookList {
      ...BookObject @include(if: $skip)
    }
  }
  ${BOOK_OBJECT}
`;

export const GET_BOOK = gql`
  query BookId($bookid: ID!) {
    bookId(id: $bookid) {
      status
      message
      data {
        ... on Book {
          ...BookObject
        }
      }
    }
  }
  ${BOOK_OBJECT}
`;

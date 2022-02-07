import { gql } from 'apollo-angular';
import { BOOK_OBJECT } from '../fragments/BookObject';

export const ADD_BOOK = gql`
  mutation AddBook($book: BookInput!) {
    addBook(book: $book) {
      status
      message
      data {
          ... BookObject
      }
    }
  }
  ${BOOK_OBJECT}
`;

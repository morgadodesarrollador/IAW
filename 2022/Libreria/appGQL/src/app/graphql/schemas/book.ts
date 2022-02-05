import {gql} from 'apollo-angular';

const GET_BOOK_LISTA = gql`
    query GetBooks{
      bookList{
        id
        title
        byPeoplesBuy {
          name
          email
        }
      }
    }`;
export default GET_BOOK_LISTA;

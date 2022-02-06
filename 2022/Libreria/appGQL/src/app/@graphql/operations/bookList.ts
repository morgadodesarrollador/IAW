import { gql } from 'apollo-angular';

export const GET_BOOKLIST = gql`
  query {
    bookList {
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
      byPeoplesBuy {
        id
        name
        email
        website
        github
        twitter
        books
      }
    }
  }
`;

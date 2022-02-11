import { gql } from "apollo-angular";
import { BOOK_OBJECT } from "../../fragments/BookObject";

export const PEOPLE_OBJECT_BOOKS = gql`
  fragment PeopleObjectBooks on People {
    books
    libros {
      id
      isbn
    }
  }
`;
export const PEOPLE_OBJECT_SOCIAL = gql`
  fragment PeopleObjetSocial on People {
    website
    twitter
    github
  }
`;

export const PEOPLE_OBJECT = gql`
  fragment PeopleObjet on People {
    id
    name
    email
    ... PeopleObjetSocial @include(if: $ifSocial)
    ... PeopleObjectBooks @include(if: $iflibros)
  }
  ${PEOPLE_OBJECT_SOCIAL}
  ${PEOPLE_OBJECT_BOOKS}
`;








import { gql } from 'apollo-angular';
import { PEOPLE_OBJECT } from '../fragments/PeopleObjects';



export const GET_PEOPLE_LIST = gql`
  query PeopleList ($ifSocial: Boolean!, $iflibros: Boolean!) {
    peopleList {
      ...PeopleObjet
    }
  }
  ${PEOPLE_OBJECT}
`;



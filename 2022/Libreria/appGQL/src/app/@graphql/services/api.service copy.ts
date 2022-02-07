import { Injectable } from '@angular/core';
import { DocumentNode } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { IBook } from 'src/app/interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }
  /* *** Creamos una QUERY genérica en el servicio. Para todas las querys habrá q pasar su gql correspondiente
    * DocumentNode --> la consulta gql.
    * variables--> Argumentos de la consulta
    * context --> contexto, el token jwt...
  */
  protected query(GQLquery: DocumentNode, GQLvariables: object={}, GQLcontext: object = {}){
    return this.apollo.watchQuery({
      query: GQLquery,
      variables: GQLvariables,
      context: GQLcontext,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map ((result) => {
      return result.data
    }));
  }

  //protected mutation(mutation: DocumentNode, variables: object={}, GQLcontext: object = {}){
  protected mutation(mutation: DocumentNode, book:IBook, context: object = {}){
    console.log(book);
    return this.apollo.mutate({
      mutation,
      variables: { book },
      context,
    }).pipe(map ((result:any) => {
      return result.data
    }));
  }
}

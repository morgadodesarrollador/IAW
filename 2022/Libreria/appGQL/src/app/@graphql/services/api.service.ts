import { Injectable } from '@angular/core';
import { DocumentNode } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) {
    console.log('super');
   }
  /* *** Creamos una QUERY genérica en el servicio. Para todas las querys habrá q pasar su gql correspondiente
    * DocumentNode --> la consulta gql.
    * variables--> Argumentos de la consulta
    * context --> contexto, el token jwt...
  */
  protected query(GQLquery: DocumentNode, GQLvariables: object={}, GQLcontext: object = {}){
    console.log(GQLquery, GQLvariables, GQLcontext );
    return this.apollo.watchQuery({
      query: GQLquery,
      variables: GQLvariables,
      context: GQLcontext,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map ((result) => {
      console.log("ioajflskdfa");
      return result.data
    }));
  }

  //protected mutation(mutation: DocumentNode, variables: object={}, GQLcontext: object = {}){
    protected mutation(mutation: DocumentNode, GQLvariables: object={}, context: object = {}){
    console.log(GQLvariables);
    return this.apollo.mutate({
      mutation,
      variables: GQLvariables ,
      context,
    }).pipe(map ((result:any) => {
      return result.data
    }));
  }
}

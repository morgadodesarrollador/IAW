import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:3026/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  //capturar errores de GraphQL o de la red
  const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors){
        console.log('Error de GraphQL', graphQLErrors)
      }
      if (networkError){
        console.log('Error de Red', networkError)
      }
  })

  return {
    link: ApolloLink.from([errorLink, httpLink.create({uri})]),
    cache: new InMemoryCache(),

  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { GET_PEOPLE_LIST } from 'src/app/@graphql/operations/people/query/peopleList';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { IPeople } from '../../../interfaces/IPeople';



@Injectable({
  providedIn: 'root'
})
export class ClientesService extends ApiService{

  constructor( apollo: Apollo ) {
    super(apollo);
  }

  list(ifSocial: boolean){
    return this.query(GET_PEOPLE_LIST, {ifSocial: false,iflibros: false}).pipe(map((result:any) => {
      console.log (result);
      return result.peopleList
    }));
  }





}

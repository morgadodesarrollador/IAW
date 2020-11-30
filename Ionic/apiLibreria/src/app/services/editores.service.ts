import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditoresService {

  constructor(private http:HttpClient) { }
  
  public getEditores(){
    return this.http.get('http://libreria.test/index.php/api/admin/editor/')
  }

}

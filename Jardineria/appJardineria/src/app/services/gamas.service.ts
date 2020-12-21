import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamasService {

  constructor(private http: HttpClient) { }

  public getGamas(){
    return this.http.get('http://jardineria.test/api/admin/gamas');
  }
}

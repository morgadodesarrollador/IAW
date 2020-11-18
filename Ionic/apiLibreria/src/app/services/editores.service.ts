import { MsmEditorInterface } from './../Models/Interfaces/EditorInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EditoresService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {  }
  
  getEditores() {
    return this._http.get<MsmEditorInterface[]>(`http://libreria.test/index.php/api/admin/editor/libros`);
  }
}

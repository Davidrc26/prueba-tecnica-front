import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApisInfo } from '../config/apis-info';
import { Injectable } from '@angular/core';
import { CartoonModel } from '../models/cartoon.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {



  constructor(
    private http: HttpClient,
  ) { }


  /**
   *consulta las caricaturas en el api
   * @returns la lista de caricaturas
   */
  getRecordList(): Observable<CartoonModel[]> {
    return this.http.get<CartoonModel[]>(ApisInfo.URL_API);
  }


}

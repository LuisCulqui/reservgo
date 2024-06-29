import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEntidad } from '../../models/TipoEntidad/tipo-entidad';

import url from '../localhost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoEntidadServiceService {

  constructor(private http: HttpClient) { }

  public getLista(): Observable<TipoEntidad[]> {
    return this.http.get<TipoEntidad[]>(`${url}/api/tipoentidad`);
  }
}

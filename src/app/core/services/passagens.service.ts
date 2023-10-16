import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosBusca, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl : string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPassagens(search: DadosBusca) : Observable<Resultado> {
    const params = this.convertParamsToString(search)
    return this.httpClient.get<Resultado>(`${this.apiUrl}/passagem/search?` + params)
  }

  convertParamsToString(filtros: DadosBusca) {
    const query = new URLSearchParams();
    for(const [key, value] of Object.entries(filtros)){
      query.append(key, value)
    }
    return query;
  }
}

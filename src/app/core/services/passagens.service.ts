import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosBusca, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl : string = environment.apiUrl;
  precoMin!: number;
  precoMax!: number;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPassagens(search: DadosBusca) : Observable<Resultado> {
    const params = this.convertParamsToString(search)
    const obs = this.httpClient.get<Resultado>(`${this.apiUrl}/passagem/search?` + params)
    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin
      this.precoMax = res.precoMax
    })
    return obs
  }

  convertParamsToString(filtros: DadosBusca) {
    const query = new URLSearchParams();
    for(const [key, value] of Object.entries(filtros)){
      query.append(key, value)
    }
    return query;
  }
}

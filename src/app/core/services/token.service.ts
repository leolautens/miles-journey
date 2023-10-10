import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string) {
    return localStorage.setItem(KEY, token)
  }

  excluirToken() {
    return localStorage.removeItem(KEY)
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? ""
  }

  possuiToken() {
    // converte o valor em boolean !!
    return !!this.retornarToken() 
  }
}

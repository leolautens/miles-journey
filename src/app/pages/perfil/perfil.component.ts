import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  titulo = 'Olá X';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;


  deslogar() {
    console.log('=====> logout')
  }

  atualizar() {
    console.log('=====> atualizar')
  }
}


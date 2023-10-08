import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor (private FormularioService: FormularioService) {}

  cadastrar() {
    const FormCadastro = this.FormularioService.getCadastro()
    console.log('Cadastro realizado com sucesso!', FormCadastro)
  }
}

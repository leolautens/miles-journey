import { PessoaUsuaria } from 'src/app/core/types/type';
import { CadastroService } from './../../core/services/cadastro.service';
import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor (
    private formularioService: FormularioService,
    private cadastroService: CadastroService
  ) {}

  cadastrar() {
    const FormCadastro = this.formularioService.getCadastro()
    if(FormCadastro?.valid) {
      const novoCadastro = FormCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso!', value)
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro!', err)
        }
      })
    }
  }
}

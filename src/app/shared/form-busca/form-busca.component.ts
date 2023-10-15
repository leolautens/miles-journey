import { FormBuscaService } from './../../core/services/form-busca.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService) {}

  buscar() {
    if (this.formBuscaService.IsValid) {
      this.realizarBusca.emit(this.formBuscaService.obterFiltros());
    } else {
      console.log('Formulário inválido');
    }
  }
}

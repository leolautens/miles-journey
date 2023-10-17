import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() search = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService,
    private passagemService: PassagensService
  ) {

  }

  busca() {
    if(!this.formBuscaService.IsValid){
      this.formBuscaService.formBusca.markAllAsTouched()
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return 
    }
    this.search.emit(this.formBuscaService.obterFiltros());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagemService.precoMin,
      precoMax: this.passagemService.precoMax
    })
  }
}

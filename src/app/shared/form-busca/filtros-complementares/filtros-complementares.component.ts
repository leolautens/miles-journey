import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() search = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService
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
}

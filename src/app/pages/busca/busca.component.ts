import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{

  passagens: Passagem[] = [];
  constructor(
    private passagemService: PassagensService,
    private formBuscaService: FormBuscaService
  ){}
  ngOnInit(): void {
    const filtroPadrao = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    }

    const filtro = this.formBuscaService.IsValid ? this.formBuscaService.obterFiltros(): filtroPadrao;
    this.passagemService.getPassagens(filtro)
      .subscribe(res => {
        this.passagens = res.resultado;
        console.log('Passagens =>', this.passagens);
      })
  }

  obterPassagens(filtro: DadosBusca){
    console.log('Filtro => ', filtro)
    this.passagemService.getPassagens(filtro).subscribe(
      res => {
        this.passagens = res.resultado
      }
    )
  }
}

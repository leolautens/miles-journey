import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca, Destaques, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{

  passagens: Passagem[] = [];
  destaques?: Destaques;
  
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
      .pipe(take(1)) 
      .subscribe(res => {
        this.passagens = res.resultado;
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax
        })
        this.obterDestaques()
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

  obterDestaques(){
    this.destaques = this.passagemService.obterPassagensDestaques(this.passagens);
  }
}

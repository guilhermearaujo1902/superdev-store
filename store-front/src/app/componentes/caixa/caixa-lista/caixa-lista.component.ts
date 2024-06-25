import { Component } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';
import { CaixaService } from '../../sevicos/caixa.service';

@Component({
  selector: 'app-caixa-lista',
  templateUrl: './caixa-lista.component.html',
  styleUrl: './caixa-lista.component.scss'
})
export class CaixaListaComponent {

  caixas: ICaixa[] = [];

  constructor(private caixaService: CaixaService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.caixaService.findAll().subscribe(retorno =>{
      this.caixas = retorno;
    });
  }

  delete(id: number): void {
    this.caixaService.delete(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

}

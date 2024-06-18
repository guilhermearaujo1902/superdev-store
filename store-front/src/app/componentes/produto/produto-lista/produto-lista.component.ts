import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutoService } from '../../sevicos/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.scss'
})
export class ProdutoListaComponent {

  produtos: IProduto[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.findAll().subscribe(retorno =>{
      this.produtos = retorno;
    });
  }

  delete(id: number): void {
    this.produtoService.delete(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

}

import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutoService } from '../../sevicos/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent {

  produto: IProduto = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0
  };

  isEdicao: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Captura o valor do ID que vem pela URL
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;

      // Busca no Backend um registro pelo ID informado
      this.produtoService.findById(id).subscribe(retorno => {

        // Atribui o registro encontrado no Backend para o produto local
        this.produto = retorno;
      });
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.produtoService.update(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    } else {
      this.produtoService.add(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}

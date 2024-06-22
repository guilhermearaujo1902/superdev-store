import { Component } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { CategoriaService } from '../../sevicos/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.scss'
})
export class CategoriaListaComponent {

  categorias: ICategoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista(): void {
    this.categoriaService.findAll().subscribe(retorno =>{
      this.categorias = retorno;
    });
  }

  delete(id: number): void {
    this.categoriaService.delete(id).subscribe(() => {
      this.carregarLista();
    });
  }

}

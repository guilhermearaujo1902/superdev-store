import { Component } from '@angular/core';
import { CategoriaService } from '../../sevicos/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.scss'
})
export class CategoriaFormComponent {

  categoria: ICategoria = {
    id: 0,
    nome: '',
    status: false,
    qualidade: ''
  };

  isEdicao: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.categoriaService.findById(id).subscribe(retorno => {
        this.categoria = retorno;
      });
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.categoriaService.update(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    } else {
      this.categoriaService.add(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/categorias']);
  }

}

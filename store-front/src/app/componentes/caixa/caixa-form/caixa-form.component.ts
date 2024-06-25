import { Component } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';
import { CaixaService } from '../../sevicos/caixa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caixa-form',
  templateUrl: './caixa-form.component.html',
  styleUrl: './caixa-form.component.scss'
})
export class CaixaFormComponent {

  caixa: ICaixa = {
    id: 0,
    status: false,
    dataFechamento: undefined,
    valorTotal: 0
  };

  isEdicao: boolean = false;

  constructor(
    private caixaService: CaixaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.caixaService.findById(id).subscribe(retorno => {
        this.caixa = retorno;
      });
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.caixaService.update(this.caixa).subscribe(() => {
        this.router.navigate(['/caixas']);
      });
    } else {
      this.caixaService.add(this.caixa).subscribe(() => {
        this.router.navigate(['/caixas']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/caixas']);
  }

}

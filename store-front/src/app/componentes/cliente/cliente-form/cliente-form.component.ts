import { Component } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';
import { ClienteService } from '../../sevicos/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent {

  cliente: ICliente = {
    id: 0,
    nome: '',
    idade: 0
  };

  isEdicao: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.clienteService.findById(id).subscribe(retorno => {
        this.cliente = retorno;
      });
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.clienteService.update(this.cliente).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.add(this.cliente).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

}

import { Component } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';
import { ClienteService } from '../../sevicos/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.scss'
})
export class ClienteListaComponent {

  clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.clienteService.findAll().subscribe(retorno =>{
      this.clientes = retorno;
    });
  }

  delete(id: number): void {
    this.clienteService.delete(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

}

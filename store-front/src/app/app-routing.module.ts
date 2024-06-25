import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';
import { CategoriaListaComponent } from './componentes/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './componentes/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './componentes/categoria/categoria-detalhe/categoria-detalhe.component';
import { ClienteListaComponent } from './componentes/cliente/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './componentes/cliente/cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './componentes/cliente/cliente-detalhe/cliente-detalhe.component';
import { CaixaListaComponent } from './componentes/caixa/caixa-lista/caixa-lista.component';
import { CaixaFormComponent } from './componentes/caixa/caixa-form/caixa-form.component';
import { CaixaDetalheComponent } from './componentes/caixa/caixa-detalhe/caixa-detalhe.component';

const routes: Routes = [
  { path: "produtos", component: ProdutoListaComponent },
  { path: "produto/novo", component: ProdutoFormComponent },
  { path: "produto/editar/:id", component: ProdutoFormComponent },
  { path: "produto/:id", component: ProdutoDetalheComponent },

  { path: "categorias", component: CategoriaListaComponent },
  { path: "categoria/novo", component: CategoriaFormComponent },
  { path: "categoria/editar/:id", component: CategoriaFormComponent },
  { path: "categoria/:id", component: CategoriaDetalheComponent },

  { path: "clientes", component: ClienteListaComponent },
  { path: "cliente/novo", component: ClienteFormComponent },
  { path: "cliente/editar/:id", component: ClienteFormComponent },
  { path: "cliente/:id", component: ClienteDetalheComponent },

  { path: "caixas", component: CaixaListaComponent },
  { path: "caixa/novo", component: CaixaFormComponent },
  { path: "caixa/editar/:id", component: CaixaFormComponent },
  { path: "caixa/:id", component: CaixaDetalheComponent },
  
  { path: "", redirectTo: "/produtos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

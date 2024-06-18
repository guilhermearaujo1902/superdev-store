import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: "produtos", component: ProdutoListaComponent },
  { path: "produto/novo", component: ProdutoFormComponent },
  { path: "produto/editar/:id", component: ProdutoFormComponent },
  { path: "produto/:id", component: ProdutoDetalheComponent },
  { path: "", redirectTo: "/produtos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

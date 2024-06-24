import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';
import { CategoriaListaComponent } from './componentes/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './componentes/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './componentes/categoria/categoria-detalhe/categoria-detalhe.component';
import { ClienteListaComponent } from './componentes/cliente/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './componentes/cliente/cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './componentes/cliente/cliente-detalhe/cliente-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDetalheComponent,
    ProdutoFormComponent,
    CategoriaListaComponent,
    CategoriaFormComponent,
    CategoriaDetalheComponent,
    ClienteListaComponent,
    ClienteFormComponent,
    ClienteDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

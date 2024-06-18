import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDetalheComponent,
    ProdutoFormComponent
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

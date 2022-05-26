import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ClientesCadastroComponent } from './components/clientes-cadastro/clientes-cadastro.component';
import { ClientesConsultaComponent } from './components/clientes-consulta/clientes-consulta.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    ClientesCadastroComponent,
    ClientesConsultaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesCadastroComponent } from './components/clientes-cadastro/clientes-cadastro.component';
import { ClientesConsultaComponent } from './components/clientes-consulta/clientes-consulta.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

//mapeamento das rotas
const routes: Routes = [
  { path: 'clientes-cadastro', component: ClientesCadastroComponent },
  { path: 'clientes-consulta', component: ClientesConsultaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'clientes-consulta' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarPensamentoComponent } from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import { EditarPensamentoComponent } from "./componentes/pensamentos/editar-pensamento/editar-pensamento.component";
import { ExcluirPensamentoComponent } from "./componentes/pensamentos/excluir-pensamento/excluir-pensamento.component";
import { ListarPensamentosComponent } from "./componentes/pensamentos/listar-pensamentos/listar-pensamentos.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ListarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'CriarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'ListarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

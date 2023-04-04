import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from '../restrito/restrito.component';
import {AtualizaProdutoComponent} from '../restrito/atualiza-produto/atualiza-produto.component';
import {CadastroProdutoComponent} from '../restrito/cadastro-produto/cadastro-produto.component';
import {ListaProdutoComponent} from '../restrito/lista-produto/lista-produto.component';


const routes: Routes = [
  { path: 'restrito', component: RestritoComponent },
  { path: 'restrito/atualizar', component: AtualizaProdutoComponent },
  { path: 'restrito/cadastro', component: CadastroProdutoComponent },
  { path: 'restrito/lista', component: ListaProdutoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RestritoRoutingModule {}

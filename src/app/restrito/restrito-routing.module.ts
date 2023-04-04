import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from '../restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from '../restrito/lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from '../restrito/atualiza-produto/atualiza-produto.component';
import { RestritoComponent } from '../restrito/restrito.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
  {
    path: 'restrito',
    component: RestritoComponent,
    children: [
      {
        path: 'restrito/cadastro',
        component: CadastroProdutoComponent,
        canActivate: [GuardGuard],
      },
      {
        path: 'restrito/lista',
        component: ListaProdutoComponent,
        canActivate: [GuardGuard],
      },
      {
        path: 'restrito/atualizar/:id',
        component: AtualizaProdutoComponent,
        canActivate: [GuardGuard],
      },
    ],
  },
  { path: '', redirectTo: 'restrito/lista', pathMatch: 'full' },

  /*{ path: 'restrito', component: RestritoComponent },
  { path: 'restrito/atualizar/:id', component: AtualizaProdutoComponent },
  { path: 'restrito/cadastro', component: CadastroProdutoComponent },
  { path: 'restrito/lista', component: ListaProdutoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },*/
];

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule],
})
export class RestritoRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudantePage } from './estudante.page';

const routes: Routes = [
  {
    path: '',
    component: EstudantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudantePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioLetivoPage } from './calendario-letivo.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioLetivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioLetivoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageswebViewsystemMainbibliotecaPage } from './pagesweb-viewsystem-mainbiblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: PageswebViewsystemMainbibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageswebViewsystemMainbibliotecaPageRoutingModule {}

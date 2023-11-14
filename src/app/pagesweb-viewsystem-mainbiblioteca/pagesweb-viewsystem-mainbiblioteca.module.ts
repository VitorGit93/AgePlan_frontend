import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageswebViewsystemMainbibliotecaPageRoutingModule } from './pagesweb-viewsystem-mainbiblioteca-routing.module';

import { PageswebViewsystemMainbibliotecaPage } from './pagesweb-viewsystem-mainbiblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageswebViewsystemMainbibliotecaPageRoutingModule
  ],
  declarations: [PageswebViewsystemMainbibliotecaPage]
})
export class PageswebViewsystemMainbibliotecaPageModule {}

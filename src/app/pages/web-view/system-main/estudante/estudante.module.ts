import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudantePageRoutingModule } from './estudante-routing.module';

import { EstudantePage } from './estudante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudantePageRoutingModule
  ],
  declarations: [EstudantePage]
})
export class EstudantePageModule {}

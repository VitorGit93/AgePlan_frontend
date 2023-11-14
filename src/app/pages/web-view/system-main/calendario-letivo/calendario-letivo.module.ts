import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioLetivoPageRoutingModule } from './calendario-letivo-routing.module';

import { CalendarioLetivoPage } from './calendario-letivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioLetivoPageRoutingModule
  ],
  declarations: [CalendarioLetivoPage]
})
export class CalendarioLetivoPageModule {}

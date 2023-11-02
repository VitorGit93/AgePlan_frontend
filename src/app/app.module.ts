import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PessoaService } from './service/domain/pessoa.service';

@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PessoaService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

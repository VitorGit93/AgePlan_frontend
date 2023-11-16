import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  constructor(public nav: NavController, public menu: MenuController) {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  logar() {
    this.nav.navigateForward('/inicio');
  }

  ngOnInit() {}
}


  // Aqui vou  implementar uma verificação simples (simulação) para renderizar a página de login ou de acesso ao sistema
  // Se na login-page o usuario for admin e senha admin, renderiza a pagina de acesso ao sistema na página de inicio
  // Casa na pagina de login o usuario for aluno e senha 123456, renderiza a pagina de acesso ao app mobile na rota
  //  src\app\pages\mobile-view\system-mobile\inicio

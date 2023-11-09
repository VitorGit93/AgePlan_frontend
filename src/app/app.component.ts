import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/inicio', icon: 'home' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person' },
    { title: 'Relatórios', url: '/relatorios', icon: 'document' }
  ];

  constructor() {}
}

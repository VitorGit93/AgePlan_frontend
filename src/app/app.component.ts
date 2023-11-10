import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /*
    O array appPages contém as páginas que serão exibidas no menu lateral.
    No entanto quero definir cada página no side menu sem usar o ngFor.
    Pois preciso usar o accordion para agrupar algumas páginas.

    Para não usar o array

  */

  public pageInicio = { title: 'Início', url: '/inicio', icon: 'home' };
  public pageCadastro = { title: 'Cadastro', url: '/cadastros', icon: 'person' };
  public pageRelatorios = { title: 'Relatórios', url: '/relatorios', icon: 'document' };

  constructor() {}
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pageInicio = { title: 'Início', url: '/inicio', icon: 'home' };
  public pageCadastro = { title: 'Cadastro', url: '/cadastros', icon: 'person' };
  public pageEstudante = { title: 'Estudante', url: '/estudante', icon: 'person' };
  public pageCurso = { title: 'Curso', url: '/curso', icon: 'school' };
  public pageCalendarioLetivo = { title: 'Calendário Letivo', url: '/calendario-letivo', icon: 'calendar' };
  public pageRelatorios = { title: 'Relatórios', url: '/relatorios', icon: 'document' };

  constructor() {}
}

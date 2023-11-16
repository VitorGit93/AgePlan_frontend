import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/web-view/login-front/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'login-cadastro',
    loadChildren: () => import('./pages/web-view/login-front/login-cadastro/login-cadastro.module').then( m => m.LoginCadastroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/web-view/system-main/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./pages/web-view/system-main/cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./pages/web-view/system-main/relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/mobile-view/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/mobile-view/system-mobile/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/mobile-view/system-mobile/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'calendario-letivo',
    loadChildren: () => import('./pages/web-view/system-main/calendario-letivo/calendario-letivo.module').then( m => m.CalendarioLetivoPageModule)
  },
  {
    path: 'estudante',
    loadChildren: () => import('./pages/web-view/system-main/estudante/estudante.module').then( m => m.EstudantePageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/web-view/system-main/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./pages/web-view/system-main/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

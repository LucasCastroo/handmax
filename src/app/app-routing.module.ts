import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cadastro-atleta',
    loadChildren: () =>
      import('./cadastro-atleta/cadastro-atleta.module').then(
        (m) => m.CadastroAtletaPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },

  {
    path: 'noticias',
    loadChildren: () =>
      import('./noticias/noticias-routing.module').then(
        (m) => m.noticiasPageRoutingModule
      ),
  },

  {
    path: 'cadastro-treino',
    loadChildren: () =>
      import('./cadastro-treino/cadastro-treino.module').then(
        (m) => m.CadastroTreinoPageModule
      ),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then((m) => m.PerfilModule),
  },
  {
    path: 'list-atleta', // Rota para a tela de listagem de atletas
    loadChildren: () =>
      import('./list-atleta/list-atleta.module').then(
        (m) => m.ListatletaPageModule
      ),
  },
  // Rotas para os modais, se necessário
  {
    path: 'edit-atleta', // Rota para o modal de edição de atleta
    loadChildren: () =>
      import('./edit-atleta/edit-atleta.module').then(
        (m) => m.EditarAtletaPageModule
      ),
  },
  {
    path: 'excluir-atleta', // Rota para o modal de exclusão de atleta
    loadChildren: () =>
      import('./excluir-atleta/excluir-atleta.module').then(
        (m) => m.ExcluiratletaPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
